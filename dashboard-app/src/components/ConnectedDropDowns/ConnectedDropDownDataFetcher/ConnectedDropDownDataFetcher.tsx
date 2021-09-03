import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SelectOption } from '../../../common_types';
import { DropDown, LoadingStatus } from '../../../common_ui';
import { FetchingStatus } from '../../../common_ui/FetchingStatus/FetchingStatus';
import { ScreenButtons } from '../screenComponents';

interface ConnectedDropDownDataFetcherProps {
    firstDropDownOptions: SelectOption[];
    secondDropDownOptions: SelectOption[];
    handleSaveFirstDropDownOptions: (param: SelectOption[] | null) => void;
    handleSaveSecondDropDownOptions: (param: SelectOption[] | null) => void;
    firstDropDownCurrentlySelectedValue: SelectOption | null;
    secondDropDownCurrentlySelectedValue: SelectOption | null;
    handleSelectFirstDropDownValue: (selectedValue: SelectOption | null) => void;
    handleSelectSecondDropDownValue: (selectedValue: SelectOption | null) => void;
    firstDropDownOptionsLoading: boolean;
    handleFirstDropDownOptionsLoadingUpdate: (status: boolean) => void;
    secondDropDownOptionsLoading: boolean;
    handleSecondDropDownOptionsLoadingUpdate: (status: boolean) => void;
}

const ComponentLayout = styled.div`
    align-self: center;
    align-content: center;
    align-items: center;
    padding: 15px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`;

export const ConnectedDropDownDataFetcher: React.FunctionComponent<ConnectedDropDownDataFetcherProps> = (
    props: React.PropsWithChildren<ConnectedDropDownDataFetcherProps>,
) => {
    const {
        firstDropDownOptions,
        secondDropDownOptions,
        handleSelectFirstDropDownValue,
        handleSelectSecondDropDownValue,
        handleSaveFirstDropDownOptions,
        handleSaveSecondDropDownOptions,
        firstDropDownOptionsLoading,
        handleFirstDropDownOptionsLoadingUpdate,
        secondDropDownOptionsLoading,
        handleSecondDropDownOptionsLoadingUpdate,
        firstDropDownCurrentlySelectedValue,
        secondDropDownCurrentlySelectedValue,
    } = props;

    const [fetching, setFetching] = useState<boolean>(false);
    const [firstDropDownSelected, setFirstDropDownSelected] = useState<boolean>(false);

    const handleChangeFetchingStatus = (newStatus: boolean): void => {
        setFetching(newStatus);
    };

    const handleSetFirstDropDownSelected = (newStatus: boolean): void => {
        setFirstDropDownSelected(newStatus);
    };

    const handleChangeFirstLoadingStatus = (newStatus: boolean): void => {
        handleFirstDropDownOptionsLoadingUpdate(newStatus);
    };
    const handleChangeSecondLoadingStatus = (newStatus: boolean): void => {
        handleSecondDropDownOptionsLoadingUpdate(newStatus);
    };

    async function fetchDropDownOptions() {
        setTimeout(() => {
            handleSaveFirstDropDownOptions(firstDropDownOptions);
            handleChangeFirstLoadingStatus(false);
            handleChangeFetchingStatus(false);
        }, 2000);
    }

    async function fetchSecondDropDownOptions() {
        setTimeout(() => {
            if (firstDropDownSelected) {
                handleSaveSecondDropDownOptions(secondDropDownOptions);
                handleChangeSecondLoadingStatus(false);
            }
        }, 2000);
    }

    useEffect(() => {
        handleChangeFirstLoadingStatus(true);
        fetchDropDownOptions();

        return () => {
            // handleSelectingFirstDropDownValue(null);
            handleSaveFirstDropDownOptions([]);
        };
    }, [firstDropDownOptions]);

    useEffect(() => {
        if (firstDropDownSelected) {
            handleChangeSecondLoadingStatus(true);
            fetchSecondDropDownOptions();
        }

        return () => {
            // handleSelectingSecondDropDownValue(null);
            handleSaveSecondDropDownOptions([]);
        };
    }, [secondDropDownOptions]);

    const handleSelectingFirstDropDownValue = (param: SelectOption | null): void => {
        handleSelectFirstDropDownValue(param);
        handleSetFirstDropDownSelected(true);
    };
    const handleSelectingSecondDropDownValue = (param: SelectOption | null): void => {
        handleSelectSecondDropDownValue(param);
        handleSetFirstDropDownSelected(true);
    };

    const handleFetchButtonClick = () => {
        handleChangeFetchingStatus(true);
        fetchDropDownOptions();
    };
    const handleFetchNullButtonClick = () => {
        handleChangeFetchingStatus(true);
        handleSelectingFirstDropDownValue(null);
        handleSetFirstDropDownSelected(false);
    };
    return (
        <ComponentLayout>
            {firstDropDownOptionsLoading ? (
                <LoadingStatus />
            ) : fetching ? (
                <FetchingStatus />
            ) : (
                <DropDown
                    options={firstDropDownOptions}
                    currentlySelectedValue={firstDropDownCurrentlySelectedValue}
                    handleSelectDropDownValue={handleSelectingFirstDropDownValue}
                />
            )}
            {firstDropDownSelected ? (
                secondDropDownOptionsLoading ? (
                    <LoadingStatus />
                ) : (
                    <DropDown
                        options={secondDropDownOptions}
                        currentlySelectedValue={secondDropDownCurrentlySelectedValue}
                        handleSelectDropDownValue={handleSelectingSecondDropDownValue}
                    />
                )
            ) : (
                <p>First Drop Down has Not Been Selected</p>
            )}
            <ScreenButtons
                handleFetchButtonClick={handleFetchButtonClick}
                handleFetchNullButtonClick={handleFetchNullButtonClick}
            />
        </ComponentLayout>
    );
};

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SelectOption } from '../../../common_types';
import { DropDown, LoadingStatus } from '../../../common_ui';
import { FetchingStatus } from '../../../common_ui/FetchingStatus/FetchingStatus';
import { ScreenButtons } from '../screenComponents';

interface ConnectedDropDownDataFetcherProps {
    handleConnectedDropDownFetchButton: (status: boolean) => void;
    // handleConnectedDropDownFetchNullButton: (status: boolean) => void;
    firstDropDownOptions: SelectOption[] | null;
    secondDropDownOptions: SelectOption[];
    firstDropDownCurrentlySelectedValue: SelectOption | null;
    secondDropDownCurrentlySelectedValue: SelectOption | null;
    handleSelectFirstDropDownValue: (selectedValue: SelectOption | null) => void;
    handleSelectSecondDropDownValue: (selectedValue: SelectOption | null) => void;
    firstDropDownOptionsLoading: boolean;
    secondDropDownOptionsLoading: boolean;
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
        handleConnectedDropDownFetchButton,
        // handleConnectedDropDownFetchNullButton,
        firstDropDownOptions,
        secondDropDownOptions,
        handleSelectFirstDropDownValue,
        handleSelectSecondDropDownValue,

        firstDropDownOptionsLoading,
        secondDropDownOptionsLoading,

        firstDropDownCurrentlySelectedValue,
        secondDropDownCurrentlySelectedValue,
    } = props;

    const handleSelectingFirstDropDownValue = (param: SelectOption | null): void => {
        handleSelectFirstDropDownValue(param);
    };
    const handleSelectingSecondDropDownValue = (param: SelectOption | null): void => {
        handleSelectSecondDropDownValue(param);
    };

    const handleFetchButtonClick = () => {
        handleConnectedDropDownFetchButton(false);
    };
    const handleFetchNullButtonClick = () => {
        handleConnectedDropDownFetchButton(true);
    };
    return (
        <ComponentLayout>
            {firstDropDownOptionsLoading ? (
                <LoadingStatus />
            ) : firstDropDownOptions ? (
                <DropDown
                    options={firstDropDownOptions}
                    currentlySelectedValue={firstDropDownCurrentlySelectedValue}
                    handleSelectDropDownValue={handleSelectingFirstDropDownValue}
                />
            ) : (
                <p>no Options</p>
            )}
            {returnProperComponentForSecondDropDown(
                firstDropDownCurrentlySelectedValue,
                secondDropDownOptionsLoading,
                <LoadingStatus />,
                <DropDown
                    options={secondDropDownOptions}
                    currentlySelectedValue={secondDropDownCurrentlySelectedValue}
                    handleSelectDropDownValue={handleSelectingSecondDropDownValue}
                />,
                <p>First Drop Down has Not Been Selected</p>,
            )}
            <ScreenButtons
                handleFetchButtonClick={handleFetchButtonClick}
                handleFetchNullButtonClick={handleFetchNullButtonClick}
            />
        </ComponentLayout>
    );
};

function returnProperComponentForSecondDropDown(
    firstDropDownCurrentlySelectedValue: SelectOption | null,
    secondDropDownOptionsLoading: boolean,
    loadingStatusComponent: JSX.Element,
    dropdownComponent: JSX.Element,
    noDataComponent: JSX.Element,
): JSX.Element {
    if (firstDropDownCurrentlySelectedValue) {
        if (secondDropDownOptionsLoading) {
            return loadingStatusComponent;
        } else {
            return dropdownComponent;
        }
    } else {
        return noDataComponent;
    }
}

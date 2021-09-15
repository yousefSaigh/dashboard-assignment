import React from 'react';
import styled from 'styled-components';
import { DropDown, LoadingStatus } from '@test-monorepo/common_ui';
import { SelectOption } from '@test-monorepo/common_types';
import { ScreenButtons } from '../NonPersistentDemo/screenComponents';

interface FetchDataProps {
    handleNonPersistentDropDownDemoFetchButton: (status: boolean) => void;
    dropDownOptions: SelectOption[] | null;
    handleSaveDropDownOptions: (param: SelectOption[] | null) => void;
    currentlySelectedValue: SelectOption | null;
    handleSelectDropDownValue: (selectedValue: SelectOption | null) => void;
    dropDownOptionsLoading: boolean;
    handleDropDownOptionsLoadingUpdate: (status: boolean) => void;
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

export const FetchData: React.FunctionComponent<FetchDataProps> = (props: React.PropsWithChildren<FetchDataProps>) => {
    const {
        handleNonPersistentDropDownDemoFetchButton,
        dropDownOptions,
        handleSelectDropDownValue,
        dropDownOptionsLoading,
        currentlySelectedValue,
    } = props;

    const handleFetchButtonClick = () => {
        handleNonPersistentDropDownDemoFetchButton(false);
    };
    const handleFetchNullButtonClick = () => {
        handleNonPersistentDropDownDemoFetchButton(true);
    };

    return (
        <ComponentLayout>
            {dropDownOptionsLoading ? (
                <LoadingStatus />
            ) : dropDownOptions ? (
                <DropDown
                    options={dropDownOptions}
                    currentlySelectedValue={currentlySelectedValue}
                    handleSelectDropDownValue={handleSelectDropDownValue}
                />
            ) : (
                <p>no Options</p>
            )}
            <ScreenButtons
                handleFetchButtonClick={handleFetchButtonClick}
                handleFetchNullButtonClick={handleFetchNullButtonClick}
            />
        </ComponentLayout>
    );
};

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { DropDown, LoadingStatus } from '../../common_ui';
import { useViewContext } from '../DataPersistence';
import { SelectOption } from '../../common_types';
import { NonPersistentDropDownOptions } from '../../constants';
import { ScreenButtons } from '../NonPersistentDemo/screenComponents';
import { useState } from 'react';
import { FetchingStatus } from '../../common_ui/FetchingStatus/FetchingStatus';

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
        handleSaveDropDownOptions,
        dropDownOptionsLoading,
        handleDropDownOptionsLoadingUpdate,
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

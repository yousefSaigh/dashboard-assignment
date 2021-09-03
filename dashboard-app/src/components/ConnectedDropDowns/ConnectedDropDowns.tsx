import React from 'react';
import styled from 'styled-components';
import { SelectOption } from '../../common_types';
import { FirstConnectedDropDownOptions, SecondConnectedDropDownOptions } from '../../constants';
import { useViewContext } from '../DataPersistence';
import { FetchData } from '../FetchData';
import { ScreenButtons } from '../NonPersistentDemo/screenComponents';
import { ConnectedDropDownDataFetcher } from './ConnectedDropDownDataFetcher/ConnectedDropDownDataFetcher';

interface ConnectedDropDownsProps {}

const ComponentLayout = styled.div`
    align-self: center;
    align-content: center;
    align-items: center;
    padding: 15px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`;

export const ConnectedDropDowns: React.FunctionComponent<ConnectedDropDownsProps> = (
    props: React.PropsWithChildren<ConnectedDropDownsProps>,
) => {
    const context = useViewContext();

    const firstConnectedDropDownSelectedValue = context?.firstConnectedDropDownValue || null;
    const secondConnectedDropDownSelectedValue = context?.secondConnectedDropDownValue || null;

    const firstConnectedDropDownOptionsLoading = context?.firstConnectedDropDownOptionsLoading || false;
    const secondConnectedDropDownOptionsLoading = context?.secondConnectedDropDownOptionsLoading || false;

    const handleSaveFirstDropDownOptions = (param: SelectOption[] | null) => {
        context && context.handleSaveFirstConnectedDropDownOptions(param);
    };
    const handleSaveSecondDropDownOptions = (param: SelectOption[] | null) => {
        context && context.handleSaveSecondConnectedDropDownOptions(param);
    };
    const handleSelectFirstDropDownValue = (param: SelectOption | null) => {
        context && context.handleSaveFirstConnectedDropDownValue(param);
    };
    const handleSelectSecondDropDownValue = (param: SelectOption | null) => {
        context && context.handleSaveSecondConnectedDropDownValue(param);
    };
    const handleFirstDropDownOptionsLoadingUpdate = (param: boolean): void => {
        context && context.handleFirstConnectedDropDownOptionsLoading(param);
    };
    const handleSecondDropDownOptionsLoadingUpdate = (param: boolean): void => {
        context && context.handleSecondConnectedDropDownOptionsLoading(param);
    };

    return (
        <ComponentLayout>
            <ConnectedDropDownDataFetcher
                firstDropDownOptions={FirstConnectedDropDownOptions}
                firstDropDownCurrentlySelectedValue={firstConnectedDropDownSelectedValue}
                handleSaveFirstDropDownOptions={handleSaveFirstDropDownOptions}
                handleSelectFirstDropDownValue={handleSelectFirstDropDownValue}
                firstDropDownOptionsLoading={firstConnectedDropDownOptionsLoading}
                handleFirstDropDownOptionsLoadingUpdate={handleFirstDropDownOptionsLoadingUpdate}
                secondDropDownOptions={SecondConnectedDropDownOptions}
                handleSaveSecondDropDownOptions={handleSaveSecondDropDownOptions}
                handleSelectSecondDropDownValue={handleSelectSecondDropDownValue}
                secondDropDownCurrentlySelectedValue={secondConnectedDropDownSelectedValue}
                secondDropDownOptionsLoading={secondConnectedDropDownOptionsLoading}
                handleSecondDropDownOptionsLoadingUpdate={handleSecondDropDownOptionsLoadingUpdate}
            />
        </ComponentLayout>
    );
};

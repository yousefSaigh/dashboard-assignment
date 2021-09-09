import React from 'react';
import styled from 'styled-components';
import { SelectOption } from '../../common_types';
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

    const firstConnectedDropDownOptions = context?.firstConnectedDropDownOptions || null;
    const secondConnectedDropDownOptions = context?.secondConnectedDropDownOptions || [];

    const firstConnectedDropDownOptionsLoading = context?.firstConnectedDropDownOptionsLoading || false;
    const secondConnectedDropDownOptionsLoading = context?.secondConnectedDropDownOptionsLoading || false;

    const handleSelectFirstDropDownValue = (param: SelectOption | null) => {
        context && context.handleSaveFirstConnectedDropDownValue(param);
    };
    const handleSelectSecondDropDownValue = (param: SelectOption | null) => {
        context && context.handleSaveSecondConnectedDropDownValue(param);
    };

    const handleConnectedDropDownFetchButton = (param: boolean) => {
        context && context.handleConnectedDropDownFetchButton(param);
    };

    return (
        <ComponentLayout>
            <ConnectedDropDownDataFetcher
                handleConnectedDropDownFetchButton={handleConnectedDropDownFetchButton}
                firstDropDownOptions={firstConnectedDropDownOptions}
                firstDropDownCurrentlySelectedValue={firstConnectedDropDownSelectedValue}
                handleSelectFirstDropDownValue={handleSelectFirstDropDownValue}
                firstDropDownOptionsLoading={firstConnectedDropDownOptionsLoading}
                secondDropDownOptions={secondConnectedDropDownOptions}
                handleSelectSecondDropDownValue={handleSelectSecondDropDownValue}
                secondDropDownCurrentlySelectedValue={secondConnectedDropDownSelectedValue}
                secondDropDownOptionsLoading={secondConnectedDropDownOptionsLoading}
            />
        </ComponentLayout>
    );
};

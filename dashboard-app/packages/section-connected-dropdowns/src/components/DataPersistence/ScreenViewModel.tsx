import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ConnectedDropDownsContextContract } from './ConnectedDropdownsContextContract';
import * as selectors from '../../module/selectors';
import { Actions } from '../../module/actions';
import { ConnectedDropDowns } from '../ConnectedDropDowns';

import { SelectOption } from '@test-monorepo/common_types';

interface ScreenViewModelProps {}

export const ViewContext = React.createContext<ConnectedDropDownsContextContract | null>(null);

export const useViewContext = () => {
    return useContext<ConnectedDropDownsContextContract | null>(ViewContext);
};

export const ViewContextProvider: React.FunctionComponent<ConnectedDropDownsContextContract> = (
    props: React.PropsWithChildren<ConnectedDropDownsContextContract>,
) => {
    const { children, ...rest } = props;
    return <ViewContext.Provider value={{ ...rest }}>{children}</ViewContext.Provider>;
};

export const ScreenViewModel: React.FunctionComponent<ScreenViewModelProps> = (
    props: React.PropsWithChildren<ScreenViewModelProps>,
) => {
    const dispatch = useDispatch();

    const connectedDropDownRequestParameters = useSelector(selectors.connectedDropDownRequestParameters);
    const secondConnectedDropDownRequestParameters = useSelector(selectors.secondConnectedDropDownRequestParameters);

    const firstConnectedDropDownValue = useSelector(selectors.firstConnectedDropDownValue);
    const firstConnectedDropDownOptions = useSelector(selectors.fetchConnectedDropDownOptions);

    const firstConnectedDropDownOptionsLoading = useSelector(selectors.firstConnectedDropDownOptionsLoading);

    const secondConnectedDropDownValue = useSelector(selectors.secondConnectedDropDownValue);
    const secondConnectedDropDownOptions = useSelector(selectors.secondConnectedDropDownOptions);
    const secondConnectedDropDownOptionsLoading = useSelector(selectors.secondConnectedDropDownOptionsLoading);

    const handleConnectedDropDownFetchButton = (status: boolean): void => {
        const request = { ...connectedDropDownRequestParameters, shouldReturnNull: status };
        dispatch(Actions.updateConnectedDropDownRequestParameters(request));
    };
    const handleSecondConnectedDropDownFetch = (status: boolean): void => {
        const request = { ...secondConnectedDropDownRequestParameters, shouldReturnNull: status };
        dispatch(Actions.updateSecondConnectedDropDownRequestParameters(request));
    };

    const handleSaveFirstConnectedDropDownValue = (param: SelectOption | null) => {
        dispatch(Actions.saveFirstConnectedDropDownValue(param));
    };

    const handleSaveSecondConnectedDropDownValue = (param: SelectOption | null) => {
        dispatch(Actions.saveSecondConnectedDropDownValue(param));
    };

    return (
        <ViewContextProvider
            firstConnectedDropDownOptions={firstConnectedDropDownOptions}
            secondConnectedDropDownOptions={secondConnectedDropDownOptions}
            firstConnectedDropDownValue={firstConnectedDropDownValue}
            handleSaveFirstConnectedDropDownValue={handleSaveFirstConnectedDropDownValue}
            secondConnectedDropDownValue={secondConnectedDropDownValue}
            handleSaveSecondConnectedDropDownValue={handleSaveSecondConnectedDropDownValue}
            handleConnectedDropDownFetchButton={handleConnectedDropDownFetchButton}
            handleSecondConnectedDropDownFetch={handleSecondConnectedDropDownFetch}
            firstConnectedDropDownOptionsLoading={firstConnectedDropDownOptionsLoading}
            secondConnectedDropDownOptionsLoading={secondConnectedDropDownOptionsLoading}
        >
            <ConnectedDropDowns />
        </ViewContextProvider>
    );
};

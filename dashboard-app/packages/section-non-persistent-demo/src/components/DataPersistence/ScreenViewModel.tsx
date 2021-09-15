import React, { useContext } from 'react';
import { Actions } from '../../module/actions';
import * as selectors from '../../module/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { DataPersistenceContextContract } from './DataPersistenceContextContract';
import { SelectOption } from '@test-monorepo/common_types';
import { NonPersistenceDemo } from '../NonPersistentDemo';

interface DataPersistenceProps {}

export const ViewContext = React.createContext<DataPersistenceContextContract | null>(null);

export const useViewContext = () => {
    return useContext<DataPersistenceContextContract | null>(ViewContext);
};

export const ViewContextProvider: React.FunctionComponent<DataPersistenceContextContract> = (
    props: React.PropsWithChildren<DataPersistenceContextContract>,
) => {
    const { children, ...rest } = props;
    return <ViewContext.Provider value={{ ...rest }}>{children}</ViewContext.Provider>;
};

export const ScreenViewModel: React.FunctionComponent<DataPersistenceProps> = (
    props: React.PropsWithChildren<DataPersistenceProps>,
) => {
    const dispatch = useDispatch();

    const nonPersistentDropDownRequestParameters = useSelector(selectors.nonPersistentDropDownRequestParameters);

    const loopingNumberValue = useSelector(selectors.loopingNumberValue);

    const nonPersistentDropDownOptions = useSelector(selectors.fetchDropDownOptions);
    const nonPersistentValue = useSelector(selectors.nonPersistentValue);
    const nonPersistentDropDownOptionsLoading = useSelector(selectors.fetchDropDownOptionsLoading);

    const handleNonPersistentDropDownDemoFetchButton = (status: boolean): void => {
        const request = { ...nonPersistentDropDownRequestParameters, shouldReturnNull: status };
        dispatch(Actions.updateNonPersistentDropDownRequestParameters(request));
    };

    const handleSaveNonPersistentDropDownValue = (param: SelectOption | null) => {
        dispatch(Actions.saveNonPersistentDropDownValue(param));
    };

    const handleSaveLoopedValue = (loopedValue: number) => {
        dispatch(Actions.saveLoopedValue(loopedValue));
    };

    return (
        <ViewContextProvider
            handleNonPersistentDropDownDemoFetchButton={handleNonPersistentDropDownDemoFetchButton}
            loopingNumberValue={loopingNumberValue}
            handleSaveLoopedValue={handleSaveLoopedValue}
            nonPersistentDropDownOptions={nonPersistentDropDownOptions}
            nonPersistentValue={nonPersistentValue}
            handleSaveNonPersistentDropDownValue={handleSaveNonPersistentDropDownValue}
            nonPersistentDropDownOptionsLoading={nonPersistentDropDownOptionsLoading}
        >
            <NonPersistenceDemo />
        </ViewContextProvider>
    );
};

import React, { useContext, useState, SetStateAction, useRef, useEffect } from 'react';
import { Actions } from '../../module/actions';
import * as selectors from '../../module/selectors';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { DataPersistenceContextContract } from '../../DataPersistenceContextContract';
import { SelectOption } from '../../common_types';
import nonPersistentDropDownService, { FetchDropDownOptionsParameters } from '../../service-non-persistent-drop-down';

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

const ComponentLayout = styled.div`
    align-self: center;
    align-content: center;
    align-items: center;
    padding: 15px;
    display: flex;
    justify-content: center;
`;

export const DataPersistence: React.FunctionComponent<DataPersistenceProps> = (
    props: React.PropsWithChildren<DataPersistenceProps>,
) => {
    const dispatch = useDispatch();

    const nonPersistentDropDownRequestParameters = useSelector(selectors.nonPersistentDropDownRequestParameters);

    const loopingNumberValue = useSelector(selectors.loopingNumberValue);

    const nonPersistentDropDownOptions = useSelector(selectors.fetchDropDownOptions);
    const nonPersistentValue = useSelector(selectors.nonPersistentValue);
    const nonPersistentDropDownOptionsLoading = useSelector(selectors.fetchDropDownOptionsLoading);
    const nonPersistentDropDownOptionsResponse = useSelector(selectors.fetchDropDownOptionsDataSelector);

    console.log('..', nonPersistentDropDownOptionsResponse);

    const firstConnectedDropDownValue = useSelector(selectors.firstConnectedDropDownValue);
    const firstConnectedDropDownOptions = useSelector(selectors.firstConnectedDropDownOptions);
    const firstConnectedDropDownOptionsLoading = useSelector(selectors.firstConnectedDropDownOptionsLoading);

    const secondConnectedDropDownValue = useSelector(selectors.secondConnectedDropDownValue);
    const secondConnectedDropDownOptions = useSelector(selectors.secondConnectedDropDownOptions);
    const secondConnectedDropDownOptionsLoading = useSelector(selectors.secondConnectedDropDownOptionsLoading);

    const textColor = useSelector(selectors.aboutPageTextColor);
    const backGroundColor = useSelector(selectors.aboutPageTextBackground);

    const handleChangeTextColor = (param: string): void => {
        dispatch(Actions.changeAboutPageTextColor(param));
    };

    const handleChangeBackGroundColor = (param: string): void => {};

    const handleNonPersistentDropDownDemoFetchButton = (status: boolean): void => {
        const request = { ...nonPersistentDropDownRequestParameters, shouldReturnNull: status };
        dispatch(Actions.updateNonPersistentDropDownRequestParameters(request));
    };
    const handleFirstConnectedDropDownOptionsLoadingUpdate = (status: boolean): void => {
        dispatch(Actions.setFirstConnectedDropDownOptionsLoading(status));
    };
    const handleSecondConnectedDropDownOptionsLoadingUpdate = (status: boolean): void => {
        dispatch(Actions.setSecondConnectedDropDownOptionsLoading(status));
    };

    const handleFetchNonPersistentDropDownOptions = (params: FetchDropDownOptionsParameters) => {
        // dispatch(Actions.saveNonPersistentDropDownOptions(params));
    };

    const handleSaveNonPersistentDropDownValue = (param: SelectOption | null) => {
        dispatch(Actions.saveNonPersistentDropDownValue(param));
    };
    const handleSaveFirstConnectedDropDownOptions = (param: SelectOption[] | null) => {
        dispatch(Actions.saveFirstConnectedDropDownOptions);
    };
    const handleSaveSecondConnectedDropDownOptions = (param: SelectOption[] | null) => {
        dispatch(Actions.saveSecondConnectedDropDownOptions(param));
    };

    const handleSaveFirstConnectedDropDownValue = (param: SelectOption | null) => {
        dispatch(Actions.saveFirstConnectedDropDownValue(param));
    };

    const handleSaveSecondConnectedDropDownValue = (param: SelectOption | null) => {
        dispatch(Actions.saveSecondConnectedDropDownValue(param));
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
            handleFetchNonPersistentDropDownOptions={handleFetchNonPersistentDropDownOptions}
            nonPersistentValue={nonPersistentValue}
            handleSaveNonPersistentDropDownValue={handleSaveNonPersistentDropDownValue}
            nonPersistentDropDownOptionsLoading={nonPersistentDropDownOptionsLoading}
            firstConnectedDropDownValue={firstConnectedDropDownValue}
            handleSaveFirstConnectedDropDownValue={handleSaveFirstConnectedDropDownValue}
            firstConnectedDropDownOptions={firstConnectedDropDownOptions}
            handleSaveFirstConnectedDropDownOptions={handleSaveFirstConnectedDropDownOptions}
            firstConnectedDropDownOptionsLoading={firstConnectedDropDownOptionsLoading}
            handleFirstConnectedDropDownOptionsLoading={handleFirstConnectedDropDownOptionsLoadingUpdate}
            secondConnectedDropDownOptions={secondConnectedDropDownOptions}
            handleSaveSecondConnectedDropDownOptions={handleSaveSecondConnectedDropDownOptions}
            secondConnectedDropDownValue={secondConnectedDropDownValue}
            handleSaveSecondConnectedDropDownValue={handleSaveSecondConnectedDropDownValue}
            secondConnectedDropDownOptionsLoading={secondConnectedDropDownOptionsLoading}
            handleSecondConnectedDropDownOptionsLoading={handleSecondConnectedDropDownOptionsLoadingUpdate}
            textColor={textColor}
            handleChangeTextColor={handleChangeTextColor}
            backGroundColor={backGroundColor}
            handleChangeBackGroundColor={handleChangeBackGroundColor}
        >
            {props.children}
        </ViewContextProvider>
    );
};

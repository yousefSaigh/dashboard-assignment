import React, { useContext, useState, SetStateAction, useRef, useEffect } from 'react';
import { OptionTypeBase } from 'react-select';
import styled from 'styled-components';
import { DataPersistenceContextContract } from '../../DataPersistenceContextContract';
import { SelectOption } from '../../common_types';
import { NonPersistentDropDownOptions } from '../../constants';

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
    const [nonPersistentDropDownOptions, saveNonPersistentDropDownOptions] = useState<SelectOption[] | null>(
        NonPersistentDropDownOptions,
    );
    const [nonPersistentValue, saveNonPersistentDropDownValue] = useState<SelectOption | null>(null);

    const handleSaveNonPersistentDropDownOptions = (param: SelectOption[] | null) => {
        saveNonPersistentDropDownOptions(param);
    };

    const handleSaveNonPersistentDropDownValue = (param: SelectOption | null) => {
        console.log('value changed to ', param);
        saveNonPersistentDropDownValue(param);
    };

    return (
        <ViewContextProvider
            nonPersistentDropDownOptions={nonPersistentDropDownOptions}
            nonPersistentValue={nonPersistentValue}
            handleSaveNonPersistentDropDownValue={handleSaveNonPersistentDropDownValue}
        >
            {props.children}
        </ViewContextProvider>
    );
};

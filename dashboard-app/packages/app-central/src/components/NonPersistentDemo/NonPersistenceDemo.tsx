import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { SelectOption } from '@test-monorepo/common_types';
import { useViewContext } from '../DataPersistence';
import { FetchData } from '../FetchData/FetchData';
import { LoopingComponent } from '../LoopingComponent';

interface NonPersistenceDemoProps {}

const ComponentLayout = styled.div`
    align-self: center;
    align-content: center;
    align-items: center;
    padding: 15px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`;
export const NonPersistenceDemo: React.FunctionComponent<NonPersistenceDemoProps> = (
    props: React.PropsWithChildren<NonPersistenceDemoProps>,
) => {
    const context = useViewContext();
    const dispatch = useDispatch();
    const [init, setInit] = useState<boolean>(true);
    const nonPersistentSelectedValue = context?.nonPersistentValue || null;
    const nonPersistentDropDownOptions = context?.nonPersistentDropDownOptions || null;
    const nonPersistentDropDownOptionsLoading = context?.nonPersistentDropDownOptionsLoading || false;

    // useEffect(() => {
    //     if (init && !nonPersistentDropDownOptions) {
    //         dispatch(Actions.updateNonPersistentDropDownRequestParameters({ shouldReturnNull: false }));
    //         setInit(false);
    //     }
    //     return () => {
    //         dispatch(Actions.updateNonPersistentDropDownRequestParameters({ shouldReturnNull: true }));
    //     };
    // }, [, nonPersistentDropDownOptions]);

    const handleNonPersistentDropDownOptionsLoadingUpdate = (param: boolean): void => {
        // context && context.handleNonPersistentDropDownOptionsLoadingUpdate(param);
    };

    const handleSaveNonPersistentDropDownOptions = (param: SelectOption[] | null) => {
        // context && context.handleSaveNonPersistentDropDownOptions(param);
    };
    const handleNonPersistentDropDownDemoFetchButton = (param: boolean) => {
        context && context.handleNonPersistentDropDownDemoFetchButton(param);
    };

    const handleSelectDropDownValue = (param: SelectOption | null) => {
        context && context.handleSaveNonPersistentDropDownValue(param);
    };

    return (
        <ComponentLayout>
            Non Persistent Demo
            <FetchData
                handleNonPersistentDropDownDemoFetchButton={handleNonPersistentDropDownDemoFetchButton}
                currentlySelectedValue={nonPersistentSelectedValue}
                dropDownOptions={nonPersistentDropDownOptions}
                handleSaveDropDownOptions={handleSaveNonPersistentDropDownOptions}
                handleSelectDropDownValue={handleSelectDropDownValue}
                dropDownOptionsLoading={nonPersistentDropDownOptionsLoading}
                handleDropDownOptionsLoadingUpdate={handleNonPersistentDropDownOptionsLoadingUpdate}
            />
            <LoopingComponent />
        </ComponentLayout>
    );
};

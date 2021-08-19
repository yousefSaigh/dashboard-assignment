import React from 'react';
import styled from 'styled-components';
import { SelectOption } from '../../common_types';
import { DropDown } from '../../common_ui';
import { useViewContext } from '../DataPersistence';
import { ScreenButtons } from './screenComponents';

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

    const dropDownOptions = context?.nonPersistentDropDownOptions || [];
    const currentlySelectedValue = context?.nonPersistentValue || null;

    const handleSelectDropDownValue = (param: SelectOption | null) => {
        context && context.handleSaveNonPersistentDropDownValue(param);
    };

    return (
        <ComponentLayout>
            Non Persistent Demo
            <DropDown
                options={dropDownOptions}
                currentlySelectedValue={currentlySelectedValue}
                handleSelectDropDownValue={handleSelectDropDownValue}
            />
            <ScreenButtons handleFetchButtonClick={() => {}} handleFetchNullButtonClick={() => {}} />
        </ComponentLayout>
    );
};

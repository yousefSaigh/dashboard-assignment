import React from 'react';
import styled from 'styled-components';
import { NonPersistentDropDownPath } from '../../constants';
import { useViewContext } from '../DataPersistence';

interface HomeProps {}

const ComponentLayout = styled.div`
    align-self: center;
    align-content: center;
    align-items: center;
    padding: 15px;
    flex-direction: row;
    justify-content: center;
`;

export const Home: React.FunctionComponent<HomeProps> = (props: React.PropsWithChildren<HomeProps>) => {
    const context = useViewContext();

    const NonPersistentDropDownValue = context?.nonPersistentValue?.value || 'Not Selected Yet';
    const FirstConnectedDropDownValue = context?.firstConnectedDropDownValue?.label || 'Not Selected Yet';
    const SecondConnectedDropDownValue = context?.secondConnectedDropDownValue?.label || 'Not Selected Yet';
    const AboutPageTextColorValue = context?.textColor || 'Not Selected Yet';
    const AboutPageBackGroundColorValue = context?.backGroundColor || 'Not Selected Yet';
    return (
        <ComponentLayout>
            <p>Non Persistent DropDown Value: {NonPersistentDropDownValue}</p>
            <p>First Connected DropDown label: {FirstConnectedDropDownValue}</p>
            <p>Second Connected DropDown label: {SecondConnectedDropDownValue}</p>
            <p>About Page text Color: {AboutPageTextColorValue}</p>
            <p>About Page text backGround color: {AboutPageBackGroundColorValue}</p>
        </ComponentLayout>
    );
};

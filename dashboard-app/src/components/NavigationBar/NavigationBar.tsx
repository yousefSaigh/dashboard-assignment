import React from 'react';
import styled from 'styled-components';

import { NavigationBarItem } from './NavigationBarItem';
import { NavigationMenu } from '../../common_types';

interface NavigationBarProps {
    navigationMenus: NavigationMenu[];
}

const NavigationBarLayout = styled.div`
    justify-content: center;
    display: flex;
    flex-flow: row nowrap;
`;
export const NavigationBar: React.FunctionComponent<NavigationBarProps> = (
    props: React.PropsWithChildren<NavigationBarProps>,
) => {
    const { navigationMenus } = props;
    return (
        <NavigationBarLayout>
            {navigationMenus.map((menu: NavigationMenu, index: number) => {
                return <NavigationBarItem key={index} navigationMenu={menu} />;
            })}
        </NavigationBarLayout>
    );
};

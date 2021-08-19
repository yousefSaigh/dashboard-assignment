import React from 'react';
import styled from 'styled-components';
import { NavigationMenu } from '../../common_types';
import { CustomLink } from '../../common_ui';

interface NavigationBarItemProps {
    navigationMenu: NavigationMenu;
}

export const NavigationBarItem: React.FunctionComponent<NavigationBarItemProps> = (
    props: React.PropsWithChildren<NavigationBarItemProps>,
) => {
    const { navigationMenu } = props;
    return (
        <CustomLink exact activeStyle={{ color: 'lightblue', textDecoration: 'underline' }} to={navigationMenu.link}>
            {navigationMenu.displayText}
        </CustomLink>
    );
};

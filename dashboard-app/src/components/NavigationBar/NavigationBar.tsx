import React from 'react';
import styled from 'styled-components';

import { StyledLink } from '../../common_ui';
import * as constants from '../../constants';

const NavigationBarLayout = styled.div`
    justify-content: center;
    display: flex;
    flex-flow: row nowrap;
`;
export const NavigationBar = () => {
    return (
        <NavigationBarLayout>
            <StyledLink exact activeStyle={{ color: 'lightblue' }} to={constants.HomeDashBoardPath}>
                Home
            </StyledLink>
            <StyledLink exact activeStyle={{ color: 'lightblue' }} to={constants.NonPersistentDropDownPath}>
                Non Persistent demo
            </StyledLink>
        
        </NavigationBarLayout>
    );
};

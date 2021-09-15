import React from 'react';
import styled from 'styled-components';
import { Button } from '@test-monorepo/common_ui';

interface ScreenButtonsProps {
    handleFetchButtonClick: () => void;
    handleFetchNullButtonClick: () => void;
}

const ComponentLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 480px;
    height: 96px;
`;

export const ScreenButtons: React.FunctionComponent<ScreenButtonsProps> = (
    props: React.PropsWithChildren<ScreenButtonsProps>,
) => {
    const { handleFetchButtonClick, handleFetchNullButtonClick } = props;
    return (
        <ComponentLayout>
            <Button buttonText={'Fetch'} handleOnClick={handleFetchButtonClick} />
            <Button buttonText={'Fetch  Null'} handleOnClick={handleFetchNullButtonClick} />
        </ComponentLayout>
    );
};

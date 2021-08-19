import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    buttonText: string;
    handleOnClick: () => void;
}

const StyledButton = styled.button`
    align-content: center;
    display: flex;
    background-color: #e0e0e0;
    justify-content: center;
    align-items: center;
    padding: 15px;
`;

export const Button: React.FunctionComponent<ButtonProps> = (props: React.PropsWithChildren<ButtonProps>) => {
    const { buttonText, handleOnClick } = props;

    const onPress = () => {
        handleOnClick();
    };

    return <StyledButton onClick={onPress}>{buttonText}</StyledButton>;
};

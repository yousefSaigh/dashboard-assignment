import React from 'react';
import styled from 'styled-components';
import { AboutPageLorimIpsumOne, AboutPageLorimIpsumTwo } from '../../../constants';

interface AboutPageTextProps {
    backgroundColor: string;
    textColor: string;
}

const StyledDiv = styled.div<AboutPageTextProps>`
    align-self: center;
    align-content: center;
    align-items: center;
    padding: 50px;
    background-color: ${(props: AboutPageTextProps) => props.backgroundColor};
    color: ${(props: AboutPageTextProps) => props.textColor};
`;

export const AboutPageText: React.FunctionComponent<AboutPageTextProps> = (props: AboutPageTextProps) => {
    const { textColor, backgroundColor } = props;
    return (
        <StyledDiv textColor={textColor} backgroundColor={backgroundColor}>
            <p> {AboutPageLorimIpsumOne}</p>
            <p>{AboutPageLorimIpsumTwo}</p>
        </StyledDiv>
    );
};

export default AboutPageText;

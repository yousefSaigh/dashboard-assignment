import React from 'react';
import styled from 'styled-components';

interface TextProps {}

const ComponentLayout = styled.p``;

export const Text: React.FunctionComponent<TextProps> = (props: React.PropsWithChildren<TextProps>) => {
    return <ComponentLayout>{props.children}</ComponentLayout>;
};

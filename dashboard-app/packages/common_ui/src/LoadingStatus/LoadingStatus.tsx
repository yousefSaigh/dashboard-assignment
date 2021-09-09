import React from 'react';
import styled from 'styled-components';

interface LoadingStatusProps {}

const ComponentLayout = styled.div``;

export const LoadingStatus: React.FunctionComponent<LoadingStatusProps> = (
    props: React.PropsWithChildren<LoadingStatusProps>,
) => {
    return <ComponentLayout>Loading ...</ComponentLayout>;
};

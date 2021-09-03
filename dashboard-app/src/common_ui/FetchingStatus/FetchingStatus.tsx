import React from 'react';
import styled from 'styled-components';

interface FetchingStatusProps {}

const ComponentLayout = styled.div``;

export const FetchingStatus: React.FunctionComponent<FetchingStatusProps> = (
    props: React.PropsWithChildren<FetchingStatusProps>,
) => {
    return <ComponentLayout>Fetching Data...</ComponentLayout>;
};

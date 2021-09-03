import React from 'react';
import styled from 'styled-components';

interface LoopingNumberProps {
    loopingNumber: number;
}
/*padding order top | right | bottom | left */
const ComponentLayout = styled.div`
    padding: 50px 0 30px 135px;
    justify-content: center;
`;

export const LoopingNumber: React.FunctionComponent<LoopingNumberProps> = (props: LoopingNumberProps) => {
    const { loopingNumber } = props;
    return <ComponentLayout>{loopingNumber}</ComponentLayout>;
};

export default LoopingNumber;

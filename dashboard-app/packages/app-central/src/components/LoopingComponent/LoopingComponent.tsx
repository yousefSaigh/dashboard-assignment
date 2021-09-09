import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@test-monorepo/common_ui';
import { LoopButtonText } from '../../constants';
import { useViewContext } from '../DataPersistence';
import { LoopingNumber } from './LoopingNumber';

interface LoopingComponentProps {}

const ComponentLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: flex-end;
    height: 100px;
    width: 80px;
`;

export const LoopingComponent: React.FunctionComponent<LoopingComponentProps> = (props: LoopingComponentProps) => {
    const context = useViewContext();
    const contextLoopedValue = context?.loopingNumberValue || 0;
    const [startLoop, setStatrLoop] = useState<boolean>(false);

    const handleStartLoop = () => {
        setStatrLoop(!startLoop);
    };
    useEffect(() => {
        if (startLoop) {
            context && context.handleSaveLoopedValue(contextLoopedValue + 1);
        }
    }, [contextLoopedValue, startLoop]);
    useEffect(() => {
        return () => {
            if (!startLoop) {
                context && context.handleSaveLoopedValue(0);
            }
        };
    }, [contextLoopedValue, startLoop]);

    return (
        <ComponentLayout>
            <Button buttonText={LoopButtonText} handleOnClick={handleStartLoop} />
            <LoopingNumber loopingNumber={contextLoopedValue} />
        </ComponentLayout>
    );
};

export default LoopingComponent;

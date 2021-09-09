import React from 'react';
import styled from 'styled-components';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Text } from '..';
interface RadioButtonProps {
    radioButtonValue: string;
    currentValue: string;
    radioButtonLabel: string;
    handleRadioButtonClick: (parameter: string) => void;
}

const ComponentLayout = styled.div`
    height: 32px;
    display: grid;
    grid-template-columns: 48px 142px;
    grid-column-gap: 8px;
    align-items: start;
    justify-items: start;
`;

export const RadioButton: React.FunctionComponent<RadioButtonProps> = (
    props: React.PropsWithChildren<RadioButtonProps>,
) => {
    const { radioButtonLabel, currentValue, handleRadioButtonClick, radioButtonValue } = props;
    const LocalHandleRadioButtonClick = (): void => {
        handleRadioButtonClick(radioButtonValue);
    };
    return (
        <ComponentLayout>
            {currentValue === radioButtonValue ? (
                <RadioButtonCheckedIcon onClick={LocalHandleRadioButtonClick} />
            ) : (
                <RadioButtonUncheckedIcon onClick={LocalHandleRadioButtonClick} />
            )}
            <Text>{radioButtonLabel}</Text>
        </ComponentLayout>
    );
};

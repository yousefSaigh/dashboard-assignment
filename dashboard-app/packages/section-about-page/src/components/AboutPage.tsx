import React from 'react';
import styled from 'styled-components';

import { RadioButton } from '@test-monorepo/common_ui';
import { AboutPageText } from './AboutPageText';
import { useViewContext } from './DataPersistence';

const ComponentLayout = styled.div``;
export const AboutPage: React.FunctionComponent = () => {
    const context = useViewContext();

    const textColorValue = context?.textColor || '';
    const backgroundColorValue = context?.backGroundColor || '';
    console.log('textcolor..', textColorValue);

    const handleRadioPress = (value: string): void => {
        if (value === 'blue') {
            context && context.handleChangeBackGroundColor(value);
            context && context.handleChangeTextColor('white');
        } else if (value === 'white') {
            context && context.handleChangeBackGroundColor(value);
            context && context.handleChangeTextColor('black');
        }
    };

    return (
        <ComponentLayout>
            <RadioButton
                radioButtonLabel={'White'}
                radioButtonValue={'white'}
                currentValue={backgroundColorValue}
                handleRadioButtonClick={handleRadioPress}
            />
            <RadioButton
                radioButtonLabel={'Blue'}
                radioButtonValue={'blue'}
                currentValue={backgroundColorValue}
                handleRadioButtonClick={handleRadioPress}
            />
            <AboutPageText textColor={textColorValue} backgroundColor={backgroundColorValue} />
        </ComponentLayout>
    );
};

export default AboutPage;

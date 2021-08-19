import React, { ComponentType } from 'react';
import styled from 'styled-components';
import Select, { ActionMeta, OptionTypeBase } from 'react-select';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { SelectOption } from '../../common_types';

interface SelectProps {
    options: SelectOption[];
    value?: OptionTypeBase | null;
    handleSelectDropDownValue: (value: OptionTypeBase | null) => void;
    placeholder?: React.ReactNode;
}
export const DropDownArrowDiv = styled.div`
    height: 24px;
    width: 24px;
`;
const ChevronComponent: ComponentType<any> = () => {
    return (
        <DropDownArrowDiv>
            <ArrowDropDownIcon htmlColor={'#232d69'} />
        </DropDownArrowDiv>
    );
};
const customSelectorStyle = {
    container: () => ({
        height: 23,
        width: 259,
        fontFamily: 'Ariel',
        border: '1 solid #979797',
        borderRadius: 1,
        backgroundColor: '#D8D8D8',
    }),
    menuList: () => ({
        height: '8px',
        borderRadius: '8px',
        fontSize: '12',
        fontFamily: 'Ariel',
    }),

    control: () => ({
        display: 'flex',
        fontSize: 10,
        height: '20px',
        color: '#737373',
        fontFamily: 'Ariel',
        letterSpacing: 0.5,
    }),
    indicatorsContainer: () => ({
        height: '18px',
    }),

    dropdownIndicator: () => ({
        height: '18px',
    }),
    placeholder: () => ({
        height: '14px',
        width: '160px',
        color: '#737373',
        fontFamily: 'Arial',
        fontSize: '12px',
        letterSpacing: '0.5px',
        lineHeight: '14px',
    }),
    option: () => ({
        fontFamily: 'Ariel',
        color: 'black',
        fontSize: '14px',
        backgroundColor: '#D8D8D8',
        '&:hover': {
            color: '#979797',
        },
    }),
};
export const DropDown: React.FunctionComponent<SelectProps> = (props: SelectProps) => {
    const { options, value, placeholder, handleSelectDropDownValue } = props;

    function onInputChange(inputValue: OptionTypeBase | null, { action }: ActionMeta<OptionTypeBase>): void {
        switch (action) {
            case 'select-option':
                handleSelectDropDownValue && handleSelectDropDownValue(inputValue);
                return;
            default:
                return;
        }
    }

    return (
        <div>
            <Select
                components={{ DropdownIndicator: ChevronComponent }}
                menuPosition={'fixed'}
                onChange={onInputChange}
                options={options}
                styles={customSelectorStyle}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
};

export default DropDown;

import React, { ComponentType } from 'react';
import styled from 'styled-components';
import Select, { ActionMeta, OptionTypeBase } from 'react-select';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { SelectOption } from '@test-monorepo/common_types';

interface SelectProps {
    options: SelectOption[];
    currentlySelectedValue?: OptionTypeBase | null;
    handleSelectDropDownValue: (value: SelectOption | null) => void;
    placeholder?: React.ReactNode;
}
const ComponentLayout = styled.div`
    align-self: center;
    align-content: center;
    align-items: center;
    padding: 15px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`;
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
        // margin: 25,
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
    const { options, currentlySelectedValue, placeholder, handleSelectDropDownValue } = props;

    function onInputChange(inputValue: OptionTypeBase | null, { action }: ActionMeta<OptionTypeBase>): void {
        switch (action) {
            case 'select-option':
                if (inputValue && inputValue.label && inputValue.value) {
                    handleSelectDropDownValue &&
                        handleSelectDropDownValue({ value: inputValue.value, label: inputValue.label });
                }
                return;
            default:
                return;
        }
    }

    return (
        <ComponentLayout>
            <Select
                components={{ DropdownIndicator: ChevronComponent }}
                menuPosition={'fixed'}
                onChange={onInputChange}
                options={options}
                styles={customSelectorStyle}
                value={currentlySelectedValue}
                placeholder={placeholder}
            />
        </ComponentLayout>
    );
};

export default DropDown;

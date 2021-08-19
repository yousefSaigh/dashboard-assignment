import { OptionTypeBase } from 'react-select';

export interface SelectOption {
    value: string | number;
    label: string;
}

export interface NavigationMenu {
    link: string;
    displayText: string;
}

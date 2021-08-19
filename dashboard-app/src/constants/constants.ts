import { NavigationMenu, SelectOption } from '../common_types';

export const HomeDashBoardPath: NavigationMenu = {
    link: '/home',
    displayText: 'Home',
};
export const NonPersistentDropDownPath: NavigationMenu = {
    link: '/NonPersistentDropDownPath',
    displayText: 'Non Persistent Demo',
};

export const NonPersistentDropDownOptions: SelectOption[] = [
    { value: '1', label: 'option 1' },
    { value: '2', label: 'option 2' },
    { value: '3', label: 'option 3' },
    { value: '4', label: 'option 4' },
];

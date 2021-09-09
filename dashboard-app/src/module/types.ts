import { constants } from 'buffer';
import { SelectOption } from '../common_types';
import {
    FetchFirstConnectedDropDownOptionsParameters,
    FetchSecondConnectedDropDownOptionsParameters,
} from '../service-connected-drop-downs';
import { FetchDropDownOptionsParameters } from '../service-non-persistent-drop-down';

export const moduleStoreName = 'local_module_store';

export interface ModuleLocalStore {
    nonPersistentValue: SelectOption | null;

    nonPersistentDropDownRequestParameters: FetchDropDownOptionsParameters;

    connectedDropDownRequestParameters: FetchFirstConnectedDropDownOptionsParameters;
    connectedSecondDropDownRequestParameters: FetchSecondConnectedDropDownOptionsParameters;

    firstConnectedDropDownValue: SelectOption | null;
    firstConnectedDropDownOptionsLoading: boolean;

    secondConnectedDropDownValue: SelectOption | null;

    loopingNumberValue: number;
    aboutPageTextBackground: string;
    aboutPageTextColor: string;
}

export const HANDLE_SAVE_FIRST_CONNECTED_DROPDOWN_VALUE = `${moduleStoreName}/HANDLE_SAVE_FIRST_CONNECTED_DROPDOWN_VALUE`;

export const HANDLE_SAVE_SECOND_CONNECTED_DROPDOWN_VALUE = `${moduleStoreName}/HANDLE_SAVE_SECOND_CONNECTED_DROPDOWN_VALUE`;

export const HANDLE_SAVE_NON_PERSISTENT_DROPDOWN_VALUE = `${moduleStoreName}/HANDLE_SAVE_NON_PERSISTENT_DROPDOWN_VALUE`;

export const HANDLE_SAVE_LOOPING_NUMBER_VALUE = `${moduleStoreName}/HANDLE_SAVE_LOOPING_NUMBER_VALUE`;
export const CHANGE_ABOUT_PAGE_TEXT_BACKGROUND = `${moduleStoreName}/CHANGE_ABOUT_PAGE_TEXT_BACKGROUND`;
export const CHANGE_ABOUT_PAGE_TEXT_COLOR = `${moduleStoreName}/CHANGE_ABOUT_PAGE_TEXT_COLOR`;

export const UPDATE_NON_PERSISTENT_DROPDOWN_OPTIONS_REQUEST_PARAMETERS = `${moduleStoreName}/UPDATE_NON_PERSISTENT_DROPDOWN_OPTIONS_REQUEST_PARAMETERS`;

export const UPDATE_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS = `${moduleStoreName}/UPDATE_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS`;
export const UPDATE_SECOND_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS = `${moduleStoreName}/UPDATE_SECOND_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS`;

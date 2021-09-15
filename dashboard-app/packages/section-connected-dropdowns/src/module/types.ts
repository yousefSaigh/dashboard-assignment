import { SelectOption } from '@test-monorepo/common_types';
import {
    FetchFirstConnectedDropDownOptionsParameters,
    FetchSecondConnectedDropDownOptionsParameters,
} from '@test-monorepo/service-connected-dropdown';

export const moduleStoreName = 'connected_drop_downs_module_store';

export interface ModuleLocalStore {
    connectedDropDownRequestParameters: FetchFirstConnectedDropDownOptionsParameters;
    connectedSecondDropDownRequestParameters: FetchSecondConnectedDropDownOptionsParameters;

    firstConnectedDropDownValue: SelectOption | null;
    firstConnectedDropDownOptionsLoading: boolean;

    secondConnectedDropDownValue: SelectOption | null;
}

export const HANDLE_SAVE_FIRST_CONNECTED_DROPDOWN_VALUE = `${moduleStoreName}/HANDLE_SAVE_FIRST_CONNECTED_DROPDOWN_VALUE`;

export const HANDLE_SAVE_SECOND_CONNECTED_DROPDOWN_VALUE = `${moduleStoreName}/HANDLE_SAVE_SECOND_CONNECTED_DROPDOWN_VALUE`;

export const UPDATE_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS = `${moduleStoreName}/UPDATE_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS`;
export const UPDATE_SECOND_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS = `${moduleStoreName}/UPDATE_SECOND_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS`;

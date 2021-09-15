import { SelectOption } from '@test-monorepo/common_types';

import { FetchDropDownOptionsParameters } from '@test-monorepo/service-non-persistent-demo';

export const moduleStoreName = 'local_module_store';

export interface ModuleLocalStore {
    nonPersistentValue: SelectOption | null;

    nonPersistentDropDownRequestParameters: FetchDropDownOptionsParameters;

    loopingNumberValue: number;
}

export const HANDLE_SAVE_NON_PERSISTENT_DROPDOWN_VALUE = `${moduleStoreName}/HANDLE_SAVE_NON_PERSISTENT_DROPDOWN_VALUE`;

export const HANDLE_SAVE_LOOPING_NUMBER_VALUE = `${moduleStoreName}/HANDLE_SAVE_LOOPING_NUMBER_VALUE`;

export const UPDATE_NON_PERSISTENT_DROPDOWN_OPTIONS_REQUEST_PARAMETERS = `${moduleStoreName}/UPDATE_NON_PERSISTENT_DROPDOWN_OPTIONS_REQUEST_PARAMETERS`;

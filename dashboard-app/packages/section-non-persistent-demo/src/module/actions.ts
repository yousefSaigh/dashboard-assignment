import { ActionsUnion, SelectOption } from '@test-monorepo/common_types';
import { ActionWithPayload, createAction } from '@test-monorepo/common_utilities';

import { FetchDropDownOptionsParameters } from '@test-monorepo/service-non-persistent-demo';
import * as types from './types';

const updateNonPersistentDropDownRequestParameters = (
    parameter: FetchDropDownOptionsParameters,
): ActionWithPayload<string, FetchDropDownOptionsParameters> =>
    createAction(types.UPDATE_NON_PERSISTENT_DROPDOWN_OPTIONS_REQUEST_PARAMETERS, parameter);

const saveNonPersistentDropDownValue = (
    parameter: SelectOption | null,
): ActionWithPayload<string, SelectOption | null> =>
    createAction(types.HANDLE_SAVE_NON_PERSISTENT_DROPDOWN_VALUE, parameter);

const saveLoopedValue = (loopingNumberValue: number): ActionWithPayload<string, number> =>
    createAction(types.HANDLE_SAVE_LOOPING_NUMBER_VALUE, loopingNumberValue);

export const Actions = {
    updateNonPersistentDropDownRequestParameters,

    saveNonPersistentDropDownValue,

    saveLoopedValue,
};
export type Actions = ActionsUnion<typeof Actions>;

import { ActionsUnion, SelectOption } from '@test-monorepo/common_types';
import { ActionWithPayload, createAction } from '@test-monorepo/common_utilities';
import {
    FetchFirstConnectedDropDownOptionsParameters,
    FetchSecondConnectedDropDownOptionsParameters,
} from '@test-monorepo/service-connected-dropdown';

import * as types from './types';

const updateConnectedDropDownRequestParameters = (
    parameter: FetchFirstConnectedDropDownOptionsParameters,
): ActionWithPayload<string, FetchFirstConnectedDropDownOptionsParameters> =>
    createAction(types.UPDATE_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS, parameter);

const updateSecondConnectedDropDownRequestParameters = (
    parameter: FetchSecondConnectedDropDownOptionsParameters,
): ActionWithPayload<string, FetchSecondConnectedDropDownOptionsParameters> =>
    createAction(types.UPDATE_SECOND_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS, parameter);

const saveFirstConnectedDropDownValue = (
    parameter: SelectOption | null,
): ActionWithPayload<string, SelectOption | null> =>
    createAction(types.HANDLE_SAVE_FIRST_CONNECTED_DROPDOWN_VALUE, parameter);

const saveSecondConnectedDropDownValue = (
    parameter: SelectOption | null,
): ActionWithPayload<string, SelectOption | null> =>
    createAction(types.HANDLE_SAVE_SECOND_CONNECTED_DROPDOWN_VALUE, parameter);

export const Actions = {
    updateConnectedDropDownRequestParameters,
    updateSecondConnectedDropDownRequestParameters,
    saveFirstConnectedDropDownValue,
    saveSecondConnectedDropDownValue,
};
export type Actions = ActionsUnion<typeof Actions>;

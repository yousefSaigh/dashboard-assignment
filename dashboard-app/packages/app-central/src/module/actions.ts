import { ActionsUnion, SelectOption } from '@test-monorepo/common_types';
import { ActionWithPayload, createAction } from '../common_utilities';
import {
    FetchFirstConnectedDropDownOptionsParameters,
    FetchSecondConnectedDropDownOptionsParameters,
} from '../service-connected-drop-downs';
import { FetchDropDownOptionsParameters } from '../service-non-persistent-drop-down';
import * as types from './types';

const updateNonPersistentDropDownRequestParameters = (
    parameter: FetchDropDownOptionsParameters,
): ActionWithPayload<string, FetchDropDownOptionsParameters> =>
    createAction(types.UPDATE_NON_PERSISTENT_DROPDOWN_OPTIONS_REQUEST_PARAMETERS, parameter);

const updateConnectedDropDownRequestParameters = (
    parameter: FetchFirstConnectedDropDownOptionsParameters,
): ActionWithPayload<string, FetchDropDownOptionsParameters> =>
    createAction(types.UPDATE_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS, parameter);

const updateSecondConnectedDropDownRequestParameters = (
    parameter: FetchSecondConnectedDropDownOptionsParameters,
): ActionWithPayload<string, FetchSecondConnectedDropDownOptionsParameters> =>
    createAction(types.UPDATE_SECOND_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS, parameter);

const saveNonPersistentDropDownValue = (
    parameter: SelectOption | null,
): ActionWithPayload<string, SelectOption | null> =>
    createAction(types.HANDLE_SAVE_NON_PERSISTENT_DROPDOWN_VALUE, parameter);

const saveFirstConnectedDropDownValue = (
    parameter: SelectOption | null,
): ActionWithPayload<string, SelectOption | null> =>
    createAction(types.HANDLE_SAVE_FIRST_CONNECTED_DROPDOWN_VALUE, parameter);

const saveSecondConnectedDropDownValue = (
    parameter: SelectOption | null,
): ActionWithPayload<string, SelectOption | null> =>
    createAction(types.HANDLE_SAVE_SECOND_CONNECTED_DROPDOWN_VALUE, parameter);

const saveLoopedValue = (loopingNumberValue: number): ActionWithPayload<string, number> =>
    createAction(types.HANDLE_SAVE_LOOPING_NUMBER_VALUE, loopingNumberValue);

const changeAboutPageTextColor = (newTextColor: string): ActionWithPayload<string, string> =>
    createAction(types.CHANGE_ABOUT_PAGE_TEXT_COLOR, newTextColor);

const changeAboutPageBackGroundColor = (newTextColor: string): ActionWithPayload<string, string> =>
    createAction(types.CHANGE_ABOUT_PAGE_TEXT_BACKGROUND, newTextColor);

export const Actions = {
    updateNonPersistentDropDownRequestParameters,

    updateConnectedDropDownRequestParameters,
    updateSecondConnectedDropDownRequestParameters,
    saveNonPersistentDropDownValue,

    saveFirstConnectedDropDownValue,

    saveSecondConnectedDropDownValue,

    saveLoopedValue,
    changeAboutPageTextColor,
    changeAboutPageBackGroundColor,
};
export type Actions = ActionsUnion<typeof Actions>;

import { ActionsUnion, SelectOption } from '../common_types';
import { ActionWithPayload, createAction } from '../common_utilities';
import { FetchDropDownOptionsParameters } from '../service-non-persistent-drop-down';
import * as types from './types';

const updateNonPersistentDropDownRequestParameters = (
    parameter: FetchDropDownOptionsParameters,
): ActionWithPayload<string, FetchDropDownOptionsParameters> =>
    createAction(types.UPDATE_NON_PERSISTENT_DROPDOWN_OPTIONS_REQUEST_PARAMETERS, parameter);

const saveNonPersistentDropDownValue = (
    parameter: SelectOption | null,
): ActionWithPayload<string, SelectOption | null> =>
    createAction(types.HANDLE_SAVE_NON_PERSISTENT_DROPDOWN_VALUE, parameter);

const saveFirstConnectedDropDownOptions = (
    parameter: SelectOption[] | null,
): ActionWithPayload<string, SelectOption[] | null> =>
    createAction(types.HANDLE_SAVE_FIRST_CONNECTED_DROPDOWN_OPTIONS, parameter);

const saveFirstConnectedDropDownValue = (
    parameter: SelectOption | null,
): ActionWithPayload<string, SelectOption | null> =>
    createAction(types.HANDLE_SAVE_FIRST_CONNECTED_DROPDOWN_VALUE, parameter);

const setFirstConnectedDropDownOptionsLoading = (NewStatus: boolean): ActionWithPayload<string, boolean> =>
    createAction(types.HANDLE_SET_FIRST_CONNECTED_DROPDOWN_OPTIONS_lOADING, NewStatus);

const saveSecondConnectedDropDownOptions = (
    parameter: SelectOption[] | null,
): ActionWithPayload<string, SelectOption[] | null> =>
    createAction(types.HANDLE_SAVE_SECOND_CONNECTED_DROPDOWN_OPTIONS, parameter);

const saveSecondConnectedDropDownValue = (
    parameter: SelectOption | null,
): ActionWithPayload<string, SelectOption | null> =>
    createAction(types.HANDLE_SAVE_SECOND_CONNECTED_DROPDOWN_VALUE, parameter);

const setSecondConnectedDropDownOptionsLoading = (NewStatus: boolean): ActionWithPayload<string, boolean> =>
    createAction(types.HANDLE_SET_SECOND_CONNECTED_DROPDOWN_OPTIONS_lOADING, NewStatus);

const saveLoopedValue = (loopingNumberValue: number): ActionWithPayload<string, number> =>
    createAction(types.HANDLE_SAVE_LOOPING_NUMBER_VALUE, loopingNumberValue);

const changeAboutPageTextColor = (newTextColor: string): ActionWithPayload<string, string> =>
    createAction(types.CHANGE_ABOUT_PAGE_TEXT_COLOR, newTextColor);

const changeAboutPageBackGroundColor = (newTextColor: string): ActionWithPayload<string, string> =>
    createAction(types.CHANGE_ABOUT_PAGE_TEXT_BACKGROUND, newTextColor);

export const Actions = {
    updateNonPersistentDropDownRequestParameters,

    saveNonPersistentDropDownValue,

    saveFirstConnectedDropDownValue,
    saveFirstConnectedDropDownOptions,
    setFirstConnectedDropDownOptionsLoading,

    saveSecondConnectedDropDownValue,
    saveSecondConnectedDropDownOptions,
    setSecondConnectedDropDownOptionsLoading,

    saveLoopedValue,
    changeAboutPageTextColor,
    changeAboutPageBackGroundColor,
};
export type Actions = ActionsUnion<typeof Actions>;

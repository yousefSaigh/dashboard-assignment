import * as types from './types';
import { AnyAction } from 'redux';

export const initialState: types.ModuleLocalStore = {
    loopingNumberValue: 0,

    nonPersistentValue: null,
    nonPersistentDropDownRequestParameters: { shouldReturnNull: false },

    firstConnectedDropDownValue: null,
    firstConnectedDropDownOptions: null,
    firstConnectedDropDownOptionsLoading: false,

    secondConnectedDropDownValue: null,
    secondConnectedDropDownOptions: null,
    secondConnectedDropDownOptionsLoading: false,

    aboutPageTextColor: 'black',
    aboutPageTextBackground: 'white',
};

export default {
    [types.CHANGE_ABOUT_PAGE_TEXT_COLOR]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { aboutPageTextColor: action.payload };
    },
    [types.CHANGE_ABOUT_PAGE_TEXT_BACKGROUND]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { aboutPageTextBackground: action.payload };
    },

    [types.HANDLE_SAVE_LOOPING_NUMBER_VALUE]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { loopingNumberValue: action.payload };
    },
    [types.UPDATE_NON_PERSISTENT_DROPDOWN_OPTIONS_REQUEST_PARAMETERS]: (
        state: types.ModuleLocalStore,
        action: AnyAction,
    ) => {
        return { nonPersistentDropDownRequestParameters: action.payload };
    },

    [types.HANDLE_SAVE_NON_PERSISTENT_DROPDOWN_VALUE]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { nonPersistentValue: action.payload };
    },

    [types.HANDLE_SAVE_FIRST_CONNECTED_DROPDOWN_VALUE]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { firstConnectedDropDownValue: action.payload };
    },

    [types.HANDLE_SAVE_FIRST_CONNECTED_DROPDOWN_OPTIONS]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { firstConnectedDropDownOptions: action.payload };
    },
    [types.HANDLE_SET_FIRST_CONNECTED_DROPDOWN_OPTIONS_lOADING]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { firstConnectedDropDownOptionsLoading: action.payload };
    },

    [types.HANDLE_SAVE_SECOND_CONNECTED_DROPDOWN_VALUE]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { secondConnectedDropDownValue: action.payload };
    },
    [types.HANDLE_SAVE_SECOND_CONNECTED_DROPDOWN_OPTIONS]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { secondConnectedDropDownOptions: action.payload };
    },
    [types.HANDLE_SET_SECOND_CONNECTED_DROPDOWN_OPTIONS_lOADING]: (
        state: types.ModuleLocalStore,
        action: AnyAction,
    ) => {
        return { secondConnectedDropDownOptionsLoading: action.payload };
    },
};

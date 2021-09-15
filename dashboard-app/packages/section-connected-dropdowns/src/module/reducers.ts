import * as types from './types';
import { AnyAction } from 'redux';

export const initialState: types.ModuleLocalStore = {
    connectedDropDownRequestParameters: { shouldReturnNull: false },
    connectedSecondDropDownRequestParameters: { shouldReturnNull: true, selectedColor: '' },

    firstConnectedDropDownValue: null,
    firstConnectedDropDownOptionsLoading: false,

    secondConnectedDropDownValue: null,
};

export default {
    [types.UPDATE_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS]: (
        state: types.ModuleLocalStore,
        action: AnyAction,
    ) => {
        return { connectedDropDownRequestParameters: action.payload };
    },
    [types.UPDATE_SECOND_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS]: (
        state: types.ModuleLocalStore,
        action: AnyAction,
    ) => {
        return { connectedSecondDropDownRequestParameters: action.payload };
    },

    [types.HANDLE_SAVE_FIRST_CONNECTED_DROPDOWN_VALUE]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { firstConnectedDropDownValue: action.payload };
    },

    [types.HANDLE_SAVE_SECOND_CONNECTED_DROPDOWN_VALUE]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { secondConnectedDropDownValue: action.payload };
    },
};

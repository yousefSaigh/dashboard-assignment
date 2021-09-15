import * as types from './types';
import { AnyAction } from 'redux';

export const initialState: types.ModuleLocalStore = {
    loopingNumberValue: 0,

    nonPersistentValue: null,
    nonPersistentDropDownRequestParameters: { shouldReturnNull: false },
};

export default {
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
};

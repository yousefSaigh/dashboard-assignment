import { HANDLE_SAVE_NON_PERSISTENT_DROPDOWN_VALUE, ModuleLocalStore } from './types';
import { AnyAction } from 'redux';

export const initialState: ModuleLocalStore = {
    nonPersistentDropDownOptions: null,
    nonPersistentValue: null,
};

export default {
    [HANDLE_SAVE_NON_PERSISTENT_DROPDOWN_VALUE]: (state: ModuleLocalStore, action: AnyAction) => {
        return { nonPersistentValue: action.payload };
    },
};

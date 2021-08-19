import { ISagaModule } from 'redux-dynamic-modules-saga';
import * as types from './types';
import reducers, { initialState } from './reducers';
import { AnyAction } from 'redux';

export const getUsersModule: ISagaModule<any> = {
    id: 'test',
    reducerMap: {
        [types.moduleStoreName]: (state: types.ModuleLocalStore = initialState, action: AnyAction) => ({
            ...state,
            ...(reducers[action.type] && reducers[action.type](state, action)),
        }),
    },
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
};

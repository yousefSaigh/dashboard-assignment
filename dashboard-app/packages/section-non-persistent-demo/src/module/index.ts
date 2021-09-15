import { ISagaModule } from 'redux-dynamic-modules-saga';
import * as types from './types';
import reducers, { initialState } from './reducers';
import { AnyAction } from 'redux';
import sagas from './sagas';
import nonPersistentDropDownService from '@test-monorepo/service-non-persistent-demo';

export const nonPersistenceModule: ISagaModule<any> = {
    id: types.moduleStoreName,
    reducerMap: {
        [types.moduleStoreName]: (state: types.ModuleLocalStore = initialState, action: AnyAction) => ({
            ...state,
            ...(reducers[action.type] && reducers[action.type](state, action)),
        }),
        [nonPersistentDropDownService.serviceStoreName]: nonPersistentDropDownService.dataReducer,
    },
    sagas: [sagas, nonPersistentDropDownService.sagas],
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
};

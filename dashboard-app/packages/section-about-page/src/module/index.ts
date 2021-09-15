import { ISagaModule } from 'redux-dynamic-modules-saga';
import * as types from './types';
import reducers, { initialState } from './reducers';
import { AnyAction } from 'redux';
import sagas from './sagas';
import nonPersistentDropDownService from '@test-monorepo/service-non-persistent-demo';
import serviceConnectedDropDowns from '@test-monorepo/service-connected-dropdown';

export const getUsersModule: ISagaModule<any> = {
    id: 'test',
    reducerMap: {
        [types.moduleStoreName]: (state: types.ModuleLocalStore = initialState, action: AnyAction) => ({
            ...state,
            ...(reducers[action.type] && reducers[action.type](state, action)),
        }),
    },
    sagas: [sagas, nonPersistentDropDownService.sagas, serviceConnectedDropDowns.sagas],
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
};

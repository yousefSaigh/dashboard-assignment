import { ISagaModule } from 'redux-dynamic-modules-saga';
import * as types from './types';
import reducers, { initialState } from './reducers';
import { AnyAction } from 'redux';
import sagas from './sagas';

import serviceConnectedDropDowns from '@test-monorepo/service-connected-dropdown';

export const connectedDropDownsModule: ISagaModule<any> = {
    id: types.moduleStoreName,
    reducerMap: {
        [types.moduleStoreName]: (state: types.ModuleLocalStore = initialState, action: AnyAction) => ({
            ...state,
            ...(reducers[action.type] && reducers[action.type](state, action)),
        }),
        [serviceConnectedDropDowns.serviceStoreName]: serviceConnectedDropDowns.dataReducer,
    },
    sagas: [sagas, serviceConnectedDropDowns.sagas],
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
};

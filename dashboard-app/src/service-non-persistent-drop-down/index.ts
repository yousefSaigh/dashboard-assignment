import { name, serviceStoreName } from './types';

import * as actionTypes from './types';

import * as actions from './actions';

import { rootReducer as dataReducer } from './reducers';

import sagas from './sagas';

export * from './contracts';

export default {
    name,
    serviceStoreName,
    actionTypes,
    actions,
    dataReducer,
    sagas,
};

import { combineReducers } from 'redux';

import * as types from '../types';

import { fetchConnectedDropDownOptionsReducer } from './fetchConnectedDropDownOptionsReducer.reducer';
import { fetchSecondConnectedDropDownOptionsReducer } from './fetchSecondConnectedDropDownOptions.reducer';

export const rootReducer = combineReducers({
    [types.FETCH_CONNECTED_DROPDOWN_OPTIONS]: fetchConnectedDropDownOptionsReducer,
    [types.FETCH_SECOND_CONNECTED_DROPDOWN_OPTIONS]: fetchSecondConnectedDropDownOptionsReducer,
});

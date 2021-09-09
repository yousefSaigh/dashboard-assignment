import { combineReducers } from 'redux';

import * as types from '../types';

import { fetchDropDownOptionsReducer } from './fetchDropDownOptions.reducer';

export const rootReducer = combineReducers({
    [types.FETCH_DROPDOWN_OPTIONS]: fetchDropDownOptionsReducer,
});

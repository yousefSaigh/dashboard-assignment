import { createFailureAction, createSuccessAction, failure, success } from '../../common_utilities';

import { AnyAction } from 'redux';
import * as types from '../types';
import { QueriesStoreWNestError } from '../../common_types/BackendResponceTypes';
import { SelectOption } from '../../common_types';

export const fetchConnectedDropDownOptionsReducerInitialState: QueriesStoreWNestError<SelectOption[]> = {
    data: null,
    loading: false,
    error: null,
};
export const fetchSecondConnectedDropDownOptionsReducer = (
    state = fetchConnectedDropDownOptionsReducerInitialState,
    action: AnyAction,
) => {
    switch (action.type) {
        case types.FETCH_SECOND_CONNECTED_DROPDOWN_OPTIONS:
            return {
                ...state,
                loading: true,
            };
        case success(types.FETCH_SECOND_CONNECTED_DROPDOWN_OPTIONS):
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case failure(types.FETCH_SECOND_CONNECTED_DROPDOWN_OPTIONS):
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

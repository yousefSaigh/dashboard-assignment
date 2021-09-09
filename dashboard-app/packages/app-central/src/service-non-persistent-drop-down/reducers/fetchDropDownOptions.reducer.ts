import { createFailureAction, createSuccessAction, failure, success } from '../../common_utilities';
import { AnyAction } from 'redux';
import * as types from '../types';
import { SelectOption, QueriesStoreWNestError } from '@test-monorepo/common_types';

export const fetchDropDownOptionsReducerInitialState: QueriesStoreWNestError<SelectOption[]> = {
    data: null,
    loading: false,
    error: null,
};

export const fetchDropDownOptionsReducer = (state = fetchDropDownOptionsReducerInitialState, action: AnyAction) => {
    switch (action.type) {
        case types.FETCH_DROPDOWN_OPTIONS:
            return {
                ...state,
                loading: true,
            };
        case success(types.FETCH_DROPDOWN_OPTIONS):
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case failure(types.FETCH_DROPDOWN_OPTIONS):
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

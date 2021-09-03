import { takeEvery, put, call } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import * as types from '../types';
import * as API from '../api';
import { ActionWithPayload, createSuccessAction } from '../../common_utilities';
import { FetchDropDownOptionsParameters } from '../contracts';

export function* fetchDropDownOptions(action: ActionWithPayload<string, FetchDropDownOptionsParameters>): Generator {
    const result: any = yield call(API.fetchDropDownOptions, action.payload);

    yield put(createSuccessAction(action.type, result));
}

export default function* (): Generator {
    yield takeEvery(types.FETCH_DROPDOWN_OPTIONS, fetchDropDownOptions);
}

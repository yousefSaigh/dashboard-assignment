import { takeEvery, put, call } from '@redux-saga/core/effects';
import * as types from '../types';
import * as API from '../api';
import { ActionWithPayload, createSuccessAction } from '@test-monorepo/common_utilities';
import {
    FetchFirstConnectedDropDownOptionsParameters,
    FetchSecondConnectedDropDownOptionsParameters,
} from '../contracts';

export function* fetchDropDownOptions(
    action: ActionWithPayload<string, FetchFirstConnectedDropDownOptionsParameters>,
): Generator {
    const result: any = yield call(API.fetchConnectedDropDownOptions, action.payload);

    console.log(result);
    yield put(createSuccessAction(action.type, result));
}
export function* fetchSecondDropDownOptions(
    action: ActionWithPayload<string, FetchSecondConnectedDropDownOptionsParameters>,
): Generator {
    const result: any = yield call(API.fetchSecondConnectedDropDownOptions, action.payload);

    yield put(createSuccessAction(action.type, result));
}

export default function* (): Generator {
    yield takeEvery(types.FETCH_CONNECTED_DROPDOWN_OPTIONS, fetchDropDownOptions);

    yield takeEvery(types.FETCH_SECOND_CONNECTED_DROPDOWN_OPTIONS, fetchSecondDropDownOptions);
}

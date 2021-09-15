import { put, takeLatest } from 'redux-saga/effects';
import { ActionWithPayload } from '@test-monorepo/common_utilities';
import * as types from '../types';
import nonPersistentDropDownService, {
    FetchDropDownOptionsParameters,
} from '@test-monorepo/service-non-persistent-demo';

const fetchNonPersistentDropDownOptions = function* (
    action: ActionWithPayload<string, FetchDropDownOptionsParameters>,
): Generator {
    yield put(nonPersistentDropDownService.actions.fetchDropDownOptions(action.payload));
};

export default function* (): Generator {
    yield takeLatest(
        types.UPDATE_NON_PERSISTENT_DROPDOWN_OPTIONS_REQUEST_PARAMETERS,
        fetchNonPersistentDropDownOptions,
    );
}

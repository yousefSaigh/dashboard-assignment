import { put, takeLatest } from 'redux-saga/effects';
import { ActionWithPayload } from '../../common_utilities';
import { Actions } from '../actions';
import * as types from '../types';
import nonPersistentDropDownService, { FetchDropDownOptionsParameters } from '../../service-non-persistent-drop-down';

const changeAboutPageBackground = function* (action: ActionWithPayload<string, string>): Generator {
    if (action.payload === 'white') {
        yield put(Actions.changeAboutPageBackGroundColor('blue'));
    } else {
        yield put(Actions.changeAboutPageBackGroundColor('white'));
    }
};

const fetchNonPersistentDropDownOptions = function* (
    action: ActionWithPayload<string, FetchDropDownOptionsParameters>,
): Generator {
    yield put(nonPersistentDropDownService.actions.fetchDropDownOptions(action.payload));
};

export default function* (): Generator {
    yield takeLatest(types.CHANGE_ABOUT_PAGE_TEXT_COLOR, changeAboutPageBackground);
    yield takeLatest(
        types.UPDATE_NON_PERSISTENT_DROPDOWN_OPTIONS_REQUEST_PARAMETERS,
        fetchNonPersistentDropDownOptions,
    );
}

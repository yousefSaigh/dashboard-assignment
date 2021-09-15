import { put, takeLatest } from 'redux-saga/effects';
import { ActionWithPayload } from '@test-monorepo/common_utilities';
import { Actions } from '../actions';
import * as types from '../types';

const changeAboutPageBackground = function* (action: ActionWithPayload<string, string>): Generator {
    if (action.payload === 'white') {
        yield put(Actions.changeAboutPageBackGroundColor('blue'));
    } else {
        yield put(Actions.changeAboutPageBackGroundColor('white'));
    }
};

export default function* (): Generator {
    yield takeLatest(types.CHANGE_ABOUT_PAGE_TEXT_COLOR, changeAboutPageBackground);
}

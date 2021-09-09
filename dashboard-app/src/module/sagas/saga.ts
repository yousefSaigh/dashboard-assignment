import { put, select, takeLatest } from 'redux-saga/effects';
import { ActionWithPayload } from '../../common_utilities';
import { Actions } from '../actions';
import * as types from '../types';
import * as selectors from '../selectors';
import nonPersistentDropDownService, { FetchDropDownOptionsParameters } from '../../service-non-persistent-drop-down';
import serviceConnectedDropDowns, {
    FetchFirstConnectedDropDownOptionsParameters,
    FetchSecondConnectedDropDownOptionsParameters,
} from '../../service-connected-drop-downs';
import { SelectOption } from '../../common_types';

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

const fetchConnectedDropDownOptions = function* (
    action: ActionWithPayload<string, FetchFirstConnectedDropDownOptionsParameters>,
): Generator {
    yield put(serviceConnectedDropDowns.actions.fetchConnectedDropDownOptions(action.payload));

    if (action.payload.shouldReturnNull) {
        const requestParameters: unknown = yield select(selectors.secondConnectedDropDownRequestParameters);
        yield put(
            Actions.updateSecondConnectedDropDownRequestParameters({
                ...(requestParameters as FetchSecondConnectedDropDownOptionsParameters),
                shouldReturnNull: true,
                selectedColor: '',
            }),
        );
        yield put(Actions.saveFirstConnectedDropDownValue(null));
        yield put(Actions.saveSecondConnectedDropDownValue(null));
    }
};

const fetchSecondConnectedDropDownOptions = function* (
    action: ActionWithPayload<string, FetchSecondConnectedDropDownOptionsParameters>,
): Generator {
    yield put(serviceConnectedDropDowns.actions.fetchSecondConnectedDropDownOptions(action.payload));
};

const updateSecondConnectedDropDownRequestParamtersBasedOnFirstDropdownSelection = function* (
    action: ActionWithPayload<string, SelectOption | null>,
): Generator {
    const requestParameters: unknown = yield select(selectors.secondConnectedDropDownRequestParameters);
    if (action.payload) {
        yield put(
            Actions.updateSecondConnectedDropDownRequestParameters({
                ...(requestParameters as FetchSecondConnectedDropDownOptionsParameters),
                shouldReturnNull: false,
                selectedColor: action.payload.value as string,
            }),
        );
    } else {
        yield put(
            Actions.updateSecondConnectedDropDownRequestParameters({
                ...(requestParameters as FetchSecondConnectedDropDownOptionsParameters),
                shouldReturnNull: true,
                selectedColor: '',
            }),
        );
    }
};

export default function* (): Generator {
    yield takeLatest(types.CHANGE_ABOUT_PAGE_TEXT_COLOR, changeAboutPageBackground);
    yield takeLatest(
        types.UPDATE_NON_PERSISTENT_DROPDOWN_OPTIONS_REQUEST_PARAMETERS,
        fetchNonPersistentDropDownOptions,
    );
    yield takeLatest(types.UPDATE_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS, fetchConnectedDropDownOptions);
    yield takeLatest(
        types.UPDATE_SECOND_CONNECTED_DROPDOWN_OPTIONS_REQUEST_PARAMETERS,
        fetchSecondConnectedDropDownOptions,
    );
    yield takeLatest(
        types.HANDLE_SAVE_FIRST_CONNECTED_DROPDOWN_VALUE,
        updateSecondConnectedDropDownRequestParamtersBasedOnFirstDropdownSelection,
    );
}

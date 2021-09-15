import { put, select, takeLatest } from 'redux-saga/effects';
import { ActionWithPayload } from '@test-monorepo/common_utilities';
import { Actions } from '../actions';
import * as types from '../types';
import * as selectors from '../selectors';
import serviceConnectedDropDowns, {
    FetchFirstConnectedDropDownOptionsParameters,
    FetchSecondConnectedDropDownOptionsParameters,
} from '@test-monorepo/service-connected-dropdown';
import { SelectOption } from '@test-monorepo/common_types';

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

import { SelectOption } from '../common_types';
import { ActionWithPayload, createAction } from '../common_utilities';
import {
    FetchFirstConnectedDropDownOptionsParameters,
    FetchSecondConnectedDropDownOptionsParameters,
} from './contracts';
import * as types from './types';

export const fetchConnectedDropDownOptions = (
    parameters: FetchFirstConnectedDropDownOptionsParameters,
): ActionWithPayload<string, FetchFirstConnectedDropDownOptionsParameters> => {
    return { type: types.FETCH_CONNECTED_DROPDOWN_OPTIONS, payload: parameters };
};
export const fetchSecondConnectedDropDownOptions = (
    parameters: FetchSecondConnectedDropDownOptionsParameters,
): ActionWithPayload<string, FetchSecondConnectedDropDownOptionsParameters> => {
    return { type: types.FETCH_SECOND_CONNECTED_DROPDOWN_OPTIONS, payload: parameters };
};

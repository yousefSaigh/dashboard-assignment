import { ActionWithPayload } from '@test-monorepo/common_utilities';
import { FetchDropDownOptionsParameters } from './contracts';
import * as types from './types';

export const fetchDropDownOptions = (
    parameters: FetchDropDownOptionsParameters,
): ActionWithPayload<string, FetchDropDownOptionsParameters> => {
    return { type: types.FETCH_DROPDOWN_OPTIONS, payload: parameters };
};

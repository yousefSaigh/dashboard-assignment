import nonPersistentDropDownService from '../../../service-non-persistent-drop-down';
import { createSelector } from 'reselect';
import { connectedDropDownServiceDataSelectors } from '../root.selectors';
import { QueriesStoreWNestError, SelectOption } from '../../../common_types';
import serviceConnectedDropDowns from '../../../service-connected-drop-downs';

export const fetchSecondConnectedDropDownOptionsDataSelector = createSelector(
    connectedDropDownServiceDataSelectors,
    (state): QueriesStoreWNestError<SelectOption[]> =>
        state[serviceConnectedDropDowns.actionTypes.FETCH_SECOND_CONNECTED_DROPDOWN_OPTIONS],
);

export const secondConnectedDropDownOptionsLoading = createSelector(
    fetchSecondConnectedDropDownOptionsDataSelector,
    (state): boolean => state.loading,
);

export const secondConnectedDropDownOptions = createSelector(
    fetchSecondConnectedDropDownOptionsDataSelector,
    (state): SelectOption[] | null => state.data,
);

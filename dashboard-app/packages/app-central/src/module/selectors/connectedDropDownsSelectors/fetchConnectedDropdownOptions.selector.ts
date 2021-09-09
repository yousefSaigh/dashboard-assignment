import nonPersistentDropDownService from '../../../service-non-persistent-drop-down';
import { createSelector } from 'reselect';
import { connectedDropDownServiceDataSelectors } from '../root.selectors';
import { QueriesStoreWNestError, SelectOption } from '@test-monorepo/common_types';
import serviceConnectedDropDowns from '../../../service-connected-drop-downs';

export const fetchConnectedDropDownOptionsDataSelector = createSelector(
    connectedDropDownServiceDataSelectors,
    (state): QueriesStoreWNestError<SelectOption[]> =>
        state[serviceConnectedDropDowns.actionTypes.FETCH_CONNECTED_DROPDOWN_OPTIONS],
);

export const fetchConnectedDropDownOptionsLoading = createSelector(
    fetchConnectedDropDownOptionsDataSelector,
    (state): boolean => state.loading,
);

export const fetchConnectedDropDownOptions = createSelector(
    fetchConnectedDropDownOptionsDataSelector,
    (state): SelectOption[] | null => state.data,
);

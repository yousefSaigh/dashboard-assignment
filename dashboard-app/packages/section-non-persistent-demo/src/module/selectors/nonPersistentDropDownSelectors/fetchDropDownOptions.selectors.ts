import nonPersistentDropDownService from '@test-monorepo/service-non-persistent-demo';
import { createSelector } from 'reselect';
import { nonPersistentDropDownServiceDataSelectors } from '../root.selectors';
import { QueriesStoreWNestError, SelectOption } from '@test-monorepo/common_types';

export const fetchDropDownOptionsDataSelector = createSelector(
    nonPersistentDropDownServiceDataSelectors,
    (state): QueriesStoreWNestError<SelectOption[]> =>
        state[nonPersistentDropDownService.actionTypes.FETCH_DROPDOWN_OPTIONS],
);

export const fetchDropDownOptionsLoading = createSelector(
    fetchDropDownOptionsDataSelector,
    (state): boolean => state.loading,
);
export const fetchDropDownOptions = createSelector(
    fetchDropDownOptionsDataSelector,
    (state): SelectOption[] | null => state.data,
);

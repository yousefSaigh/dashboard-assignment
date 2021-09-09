import nonPersistentDropDownService from '../../../service-non-persistent-drop-down';
import { createSelector } from 'reselect';
import { nonPersistentDropDownServiceDataSelectors } from '../root.selectors';
import { QueriesStoreWNestError, SelectOption } from '../../../common_types';

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

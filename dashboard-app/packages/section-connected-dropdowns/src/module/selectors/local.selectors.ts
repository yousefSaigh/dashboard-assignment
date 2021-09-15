import { privateDataSelectors } from './root.selectors';
import { createSelector } from 'reselect';
import { SelectOption } from '@test-monorepo/common_types';

import {
    FetchFirstConnectedDropDownOptionsParameters,
    FetchSecondConnectedDropDownOptionsParameters,
} from '@test-monorepo/service-connected-dropdown';
import { ModuleLocalStore } from '../types';

export const connectedDropDownRequestParameters = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): FetchFirstConnectedDropDownOptionsParameters => state.connectedDropDownRequestParameters,
);
export const secondConnectedDropDownRequestParameters = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): FetchSecondConnectedDropDownOptionsParameters =>
        state.connectedSecondDropDownRequestParameters,
);

export const firstConnectedDropDownValue = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): SelectOption | null => state.firstConnectedDropDownValue,
);
export const firstConnectedDropDownOptionsLoading = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): boolean => state.firstConnectedDropDownOptionsLoading,
);

export const secondConnectedDropDownValue = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): SelectOption | null => state.secondConnectedDropDownValue,
);

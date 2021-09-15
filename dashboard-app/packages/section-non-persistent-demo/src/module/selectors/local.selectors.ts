import { privateDataSelectors } from './root.selectors';
import { createSelector } from 'reselect';
import { SelectOption } from '@test-monorepo/common_types';
import { FetchDropDownOptionsParameters } from '@test-monorepo/service-non-persistent-demo';

import { ModuleLocalStore } from '../types';

export const nonPersistentDropDownRequestParameters = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): FetchDropDownOptionsParameters => state.nonPersistentDropDownRequestParameters,
);

export const nonPersistentValue = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): SelectOption | null => state.nonPersistentValue,
);

export const loopingNumberValue = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): number => state.loopingNumberValue,
);

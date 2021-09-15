import { privateDataSelectors } from './root.selectors';
import { createSelector } from 'reselect';

import { ModuleLocalStore } from '../types';

export const aboutPageTextColor = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): string => state.aboutPageTextColor,
);
export const aboutPageTextBackground = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): string => state.aboutPageTextBackground,
);

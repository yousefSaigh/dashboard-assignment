import { privateDataSelectors } from './root.selectors';
import { createSelector } from 'reselect';
import { SelectOption } from '../../common_types';
import { FetchDropDownOptionsParameters } from '../../service-non-persistent-drop-down';
import {
    FetchFirstConnectedDropDownOptionsParameters,
    FetchSecondConnectedDropDownOptionsParameters,
} from '../../service-connected-drop-downs';
import { ModuleLocalStore } from '../types';

export const nonPersistentDropDownRequestParameters = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): FetchDropDownOptionsParameters => state.nonPersistentDropDownRequestParameters,
);

export const connectedDropDownRequestParameters = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): FetchFirstConnectedDropDownOptionsParameters => state.connectedDropDownRequestParameters,
);
export const secondConnectedDropDownRequestParameters = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): FetchSecondConnectedDropDownOptionsParameters =>
        state.connectedSecondDropDownRequestParameters,
);

export const nonPersistentValue = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): SelectOption | null => state.nonPersistentValue,
);

export const loopingNumberValue = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): number => state.loopingNumberValue,
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

export const aboutPageTextColor = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): string => state.aboutPageTextColor,
);
export const aboutPageTextBackground = createSelector(
    privateDataSelectors,
    (state: ModuleLocalStore): string => state.aboutPageTextBackground,
);

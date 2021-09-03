import { privateDataSelectors } from './root.selectors';
import { createSelector } from 'reselect';
import { SelectOption } from '../../common_types';
import { FetchDropDownOptionsParameters } from '../../service-non-persistent-drop-down';

export const nonPersistentDropDownRequestParameters = createSelector(
    privateDataSelectors,
    (state: any): FetchDropDownOptionsParameters => state.nonPersistentDropDownRequestParameters,
);
export const nonPersistentDropDownOptions = createSelector(
    privateDataSelectors,
    (state: any): SelectOption[] => state.nonPersistentDropDownOptions,
);

export const nonPersistentValue = createSelector(
    privateDataSelectors,
    (state: any): SelectOption => state.nonPersistentValue,
);

export const nonPersistentDropDownOptionsLoading = createSelector(
    privateDataSelectors,
    (state: any): boolean => state.nonPersistentDropDownOptionsLoading,
);

export const loopingNumberValue = createSelector(
    privateDataSelectors,
    (state: any): number => state.loopingNumberValue,
);

export const firstConnectedDropDownOptions = createSelector(
    privateDataSelectors,
    (state: any): SelectOption[] => state.firstConnectedDropDownOptions,
);
export const firstConnectedDropDownValue = createSelector(
    privateDataSelectors,
    (state: any): SelectOption => state.firstConnectedDropDownValue,
);
export const firstConnectedDropDownOptionsLoading = createSelector(
    privateDataSelectors,
    (state: any): boolean => state.firstConnectedDropDownOptionsLoading,
);

export const secondConnectedDropDownValue = createSelector(
    privateDataSelectors,
    (state: any): SelectOption => state.secondConnectedDropDownValue,
);
export const secondConnectedDropDownOptions = createSelector(
    privateDataSelectors,
    (state: any): SelectOption[] => state.secondConnectedDropDownOptions,
);
export const secondConnectedDropDownOptionsLoading = createSelector(
    privateDataSelectors,
    (state: any): boolean => state.secondConnectedDropDownOptionsLoading,
);

export const aboutPageTextColor = createSelector(
    privateDataSelectors,
    (state: any): string => state.aboutPageTextColor,
);
export const aboutPageTextBackground = createSelector(
    privateDataSelectors,
    (state: any): string => state.aboutPageTextBackground,
);

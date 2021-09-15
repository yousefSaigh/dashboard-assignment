import { ActionsUnion } from '@test-monorepo/common_types';
import { ActionWithPayload, createAction } from '@test-monorepo/common_utilities';
import * as types from './types';

const changeAboutPageTextColor = (newTextColor: string): ActionWithPayload<string, string> =>
    createAction(types.CHANGE_ABOUT_PAGE_TEXT_COLOR, newTextColor);

const changeAboutPageBackGroundColor = (newTextColor: string): ActionWithPayload<string, string> =>
    createAction(types.CHANGE_ABOUT_PAGE_TEXT_BACKGROUND, newTextColor);

export const Actions = {
    changeAboutPageTextColor,
    changeAboutPageBackGroundColor,
};
export type Actions = ActionsUnion<typeof Actions>;

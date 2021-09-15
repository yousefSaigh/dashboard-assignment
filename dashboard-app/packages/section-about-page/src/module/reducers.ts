import * as types from './types';
import { AnyAction } from 'redux';

export const initialState: types.ModuleLocalStore = {
    aboutPageTextColor: 'black',
    aboutPageTextBackground: 'white',
};

export default {
    [types.CHANGE_ABOUT_PAGE_TEXT_COLOR]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { aboutPageTextColor: action.payload };
    },
    [types.CHANGE_ABOUT_PAGE_TEXT_BACKGROUND]: (state: types.ModuleLocalStore, action: AnyAction) => {
        return { aboutPageTextBackground: action.payload };
    },
};

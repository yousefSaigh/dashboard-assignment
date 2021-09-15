export const moduleStoreName = 'local_module_store';

export interface ModuleLocalStore {
    aboutPageTextBackground: string;
    aboutPageTextColor: string;
}

export const CHANGE_ABOUT_PAGE_TEXT_BACKGROUND = `${moduleStoreName}/CHANGE_ABOUT_PAGE_TEXT_BACKGROUND`;
export const CHANGE_ABOUT_PAGE_TEXT_COLOR = `${moduleStoreName}/CHANGE_ABOUT_PAGE_TEXT_COLOR`;

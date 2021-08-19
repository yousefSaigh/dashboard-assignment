import { constants } from 'buffer';
import { SelectOption } from '../common_types';

export const moduleStoreName = 'local_module_store';

export interface ModuleLocalStore {
    nonPersistentDropDownOptions: SelectOption[] | null;
    nonPersistentValue: SelectOption | null;
}

export const HANDLE_SAVE_NON_PERSISTENT_DROPDOWN_VALUE = `${moduleStoreName}/HANDLE_SAVE_NON_PERSISTENT_DROPDOWN_VALUE`;

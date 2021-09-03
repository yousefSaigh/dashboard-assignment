import { HashTable } from '../../common_types';
import nonPersistentDropDownService from '../../service-non-persistent-drop-down';
import * as types from '../types';

export const privateDataSelectors = (state: HashTable<any>): types.ModuleLocalStore => state[types.moduleStoreName];
export const nonPersistentDropDownServiceDataSelectors = (state: HashTable<any>): any =>
    state[nonPersistentDropDownService.serviceStoreName];

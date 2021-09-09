import { HashTable } from '@test-monorepo/common_types';
import serviceConnectedDropDowns from '../../service-connected-drop-downs';
import nonPersistentDropDownService from '../../service-non-persistent-drop-down';
import * as types from '../types';

export const privateDataSelectors = (state: HashTable<any>): types.ModuleLocalStore => state[types.moduleStoreName];
export const nonPersistentDropDownServiceDataSelectors = (state: HashTable<any>): any =>
    state[nonPersistentDropDownService.serviceStoreName];

export const connectedDropDownServiceDataSelectors = (state: HashTable<any>): any =>
    state[serviceConnectedDropDowns.serviceStoreName];

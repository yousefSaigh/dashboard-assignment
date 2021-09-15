import { HashTable } from '@test-monorepo/common_types';
import nonPersistentDropDownService from '@test-monorepo/service-non-persistent-demo';
import * as types from '../types';

export const privateDataSelectors = (state: HashTable<any>): types.ModuleLocalStore => state[types.moduleStoreName];
export const nonPersistentDropDownServiceDataSelectors = (state: HashTable<any>): any =>
    state[nonPersistentDropDownService.serviceStoreName];

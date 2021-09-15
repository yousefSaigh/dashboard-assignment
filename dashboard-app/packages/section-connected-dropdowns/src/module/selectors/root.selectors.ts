import { HashTable } from '@test-monorepo/common_types';
import serviceConnectedDropDowns from '@test-monorepo/service-connected-dropdown';
import * as types from '../types';

export const privateDataSelectors = (state: HashTable<any>): types.ModuleLocalStore => state[types.moduleStoreName];

export const connectedDropDownServiceDataSelectors = (state: HashTable<any>): any =>
    state[serviceConnectedDropDowns.serviceStoreName];

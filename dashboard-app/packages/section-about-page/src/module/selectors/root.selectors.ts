import { HashTable } from '@test-monorepo/common_types';

import * as types from '../types';

export const privateDataSelectors = (state: HashTable<any>): types.ModuleLocalStore => state[types.moduleStoreName];

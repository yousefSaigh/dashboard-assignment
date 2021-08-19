import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { ISagaModule } from 'redux-dynamic-modules-saga';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import { applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

export const rootModule: ISagaModule<any> = {
    id: 'initial',
    middlewares: [logger],
};

const store: IModuleStore<any> = createStore({
    enhancers: [applyMiddleware()],
    extensions: [getSagaExtension(), getThunkExtension()],
});

export default store;

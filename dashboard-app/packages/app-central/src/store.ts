import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { ISagaModule } from 'redux-dynamic-modules-saga';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import { applyMiddleware } from 'redux';
import { createLogger, logger } from 'redux-logger';
// import { getUsersModule } from './module';

const customLogger = createLogger({});

export const rootModule: ISagaModule<any> = {
    id: 'initial',
    middlewares: [logger],
};

const store: IModuleStore<any> = createStore(
    {
        enhancers: [applyMiddleware(customLogger)],
        extensions: [getSagaExtension(), getThunkExtension()],
    },
    // getUsersModule,
);

export default store;

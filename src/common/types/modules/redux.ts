declare module 'RootRedux' {
    import { Action, Store } from 'redux';
    import { SagaMiddleware } from '@redux-saga/core';

    export interface ReduxAction<T = any, P = any> extends Action {
        type: T;
        payload?: P;
    }

    export type AppStore = Store & {
        runSaga: SagaMiddleware['run'];
        close: () => void;
    };
}

import { AnyAction } from 'redux';
export interface Action<T extends string> extends AnyAction {
    type: T;
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
    payload: P;
}

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string, P>(type: T, payload: P) {
    return payload === undefined ? { type } : { type, payload };
}

export function createSuccessAction(actionType: string, actionPayload: any) {
    return {
        type: `${actionType}_SUCCESS`,
        payload: actionPayload,
    };
}

export function createFailureAction(actionType: string, actionPayload: any) {
    return {
        type: `${actionType}_FAILURE`,
        payload: actionPayload,
    };
}

export function success(actionType: string) {
    return `${actionType}_SUCCESS`;
}

export function failure(actionType: string) {
    return `${actionType}_FAILURE`;
}

import { HashTable as HashTables } from './CommonTypes';
import { AxiosError } from 'axios';

export interface ErrorMessageArrayItem {
    constraints: HashTables<any>;
    property: string;
    target: HashTables<any>;
}

export interface ErrorMessageType {
    error: string;
    statusCode: number;
    message: ErrorMessageArrayItem[];
    path: string;
    timeStamp: string;
}

export interface BackendError {
    response: {
        data: {
            statusCode: number;
            statusText: string;
            message: ErrorMessageType;
            ok: boolean;
            redirected: boolean;
            url: string;
        };
    };
    status: number;
}

export type CompoundBackendErrorType = AxiosErrorResponse | NestServicesError | NestError | null;

export interface NestResponse<T> {
    data: T;
    status?: number;
    errorMessage?: string;
}

export interface ResponseQuery<T> {
    loading: boolean;
    error: BackendError;
    data: T;
}

export const testError: BackendError = {
    response: {
        data: {
            statusCode: 305,
            statusText: 'string',
            message: {
                error: 'string',
                statusCode: 305,
                message: [],
                path: 'string',
                timeStamp: 'string',
            },
            ok: false,
            redirected: false,
            url: 'someUrl',
        },
    },
    status: 305,
};

export interface AxiosErrorResponse {
    error: {
        statusCode: number;
        path: string;
        timestamp: string;
        message: {
            error: string;
            statusCode: number;
            message: string;
        };
    };
    status: number;
}

interface AxiosErrorResponseError {
    statusCode: number;
    path: string;
    timestamp: string;
    message: {
        error: string;
        statusCode: number;
        message: string;
    };
}

export const AxiosErrorResponseStub = {
    error: {
        statusCode: 666,
        path: 'this/is/a/fallback/when/theres/no/error',
        timestamp: '2020-07-13T20:51:59.559Z',
        message: {
            error: 'Not Found - this is a fallback when axios did not get any errors but the request has failed',
            statusCode: 666,
            message: 'Cannot GET what/you/just/did; dont get it, really',
        },
    },
    status: 666,
};

export const axiosTestError: AxiosError = {
    config: {},
    isAxiosError: true,
    message: '',
    name: '',
    stack: '',
    toJSON(): Record<string, unknown> {
        return {};
    },
    response: {
        data: {
            statusCode: 128,
            path: 'some/ip/path',
            timestamp: '2020-08-13T20:51:59.559Z',
            message: {
                error: 'Some error text',
                statusCode: 128,
                message: 'Some error message',
            },
        },
        status: 128,
        statusText: 'some status text',
        headers: {},
        config: {},
    },
};

export const backendTestErrorResult: AxiosErrorResponse = {
    error: {
        statusCode: 128,
        path: 'some/ip/path',
        timestamp: '2020-08-13T20:51:59.559Z',
        message: {
            error: 'Some error text',
            statusCode: 128,
            message: 'Some error message',
        },
    },
    status: 128,
};

export class PromiseTestError extends Error implements AxiosErrorResponse {
    public error: AxiosErrorResponseError;
    public status: number;

    constructor(error: AxiosErrorResponse) {
        super();
        this.error = error.error;
        this.status = error.status;
    }
}

export interface QueriesStore<T> {
    data: T | null;
    loading: boolean;
    error: AxiosErrorResponse | null;
}

export interface QueriesStoreWNestError<T> {
    data: T | null;
    loading: boolean;
    error: AxiosErrorResponse | null | NestServicesError;
}

export interface NestServicesErrorBody {
    statusCode: number;
    path: string;
    timestamp: string;
    message: {
        error: string;
        message: [
            {
                constraints: HashTables<string>;
                property: string;
                target: HashTables<string>;
                value: string;
            },
        ];
    };
}

export interface NestServicesError {
    status: number;
    error: NestServicesErrorBody;
}

export class NestError implements NestServicesError {
    public status: number;
    public error: NestServicesErrorBody;

    constructor(servicesError: NestServicesError) {
        this.error = servicesError.error;
        this.status = servicesError.status;
    }
}

export const nestTestError: NestServicesError = {
    error: {
        statusCode: 400,
        path: '/api/v1/hedis-retrieval/practices?page=1&lockedFor…d=false&sortBy=amountOfMembers&sortDirection=desc',
        timestamp: '2021-02-03T16:44:15.263Z',
        message: {
            error: 'Bad Request',
            message: [
                {
                    constraints: { isBoolean: 'escalated must be a boolean value' },
                    property: 'escalated',
                    target: {
                        escalated: 'false',
                        lockedForUser: 'false',
                        page: '1',
                        pageSize: '20',
                        sortBy: 'amountOfMembers',
                        sortDirection: 'desc',
                    },
                    value: 'false',
                },
            ],
        },
    },
    status: 400,
};

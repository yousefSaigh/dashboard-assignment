export interface SelectOption {
    value: string | number;
    label: string;
}

export interface NavigationMenu {
    link: string;
    displayText: string;
}

export type AnyFunction = (...args: any[]) => any;

export interface HashTable<T> {
    [key: string]: T;
}

export type StringMap<T> = { [key: string]: T };

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>;

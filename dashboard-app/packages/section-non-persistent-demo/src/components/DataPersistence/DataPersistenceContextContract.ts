import { SelectOption } from '@test-monorepo/common_types';

export interface DataPersistenceContextContract {
    loopingNumberValue: number | null;
    handleSaveLoopedValue: (value: number) => void;

    nonPersistentDropDownOptions: SelectOption[] | null;

    handleNonPersistentDropDownDemoFetchButton: (status: boolean) => void;

    nonPersistentValue: SelectOption | null;
    handleSaveNonPersistentDropDownValue: (param: SelectOption | null) => void;

    nonPersistentDropDownOptionsLoading: boolean;
}

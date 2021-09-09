import { SelectOption } from '@test-monorepo/common_types';
import { FetchDropDownOptionsParameters } from './service-non-persistent-drop-down';

export interface DataPersistenceContextContract {
    loopingNumberValue: number | null;
    handleSaveLoopedValue: (value: number) => void;

    nonPersistentDropDownOptions: SelectOption[] | null;

    handleNonPersistentDropDownDemoFetchButton: (status: boolean) => void;
    handleConnectedDropDownFetchButton: (status: boolean) => void;
    handleSecondConnectedDropDownFetch: (status: boolean) => void;

    nonPersistentValue: SelectOption | null;
    handleSaveNonPersistentDropDownValue: (param: SelectOption | null) => void;

    nonPersistentDropDownOptionsLoading: boolean;

    firstConnectedDropDownValue: SelectOption | null;
    handleSaveFirstConnectedDropDownValue: (param: SelectOption | null) => void;

    firstConnectedDropDownOptions: SelectOption[] | null;

    secondConnectedDropDownValue: SelectOption | null;
    handleSaveSecondConnectedDropDownValue: (param: SelectOption | null) => void;

    secondConnectedDropDownOptions: SelectOption[] | null;

    firstConnectedDropDownOptionsLoading: boolean;

    secondConnectedDropDownOptionsLoading: boolean;

    textColor: string;
    handleChangeTextColor: (value: string) => void;

    backGroundColor: string;
    handleChangeBackGroundColor: (value: string) => void;
}

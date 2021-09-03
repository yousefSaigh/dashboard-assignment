import { SelectOption } from './common_types';
import { FetchDropDownOptionsParameters } from './service-non-persistent-drop-down';

export interface DataPersistenceContextContract {
    loopingNumberValue: number | null;
    handleSaveLoopedValue: (value: number) => void;

    nonPersistentDropDownOptions: SelectOption[] | null;
    handleFetchNonPersistentDropDownOptions: (params: FetchDropDownOptionsParameters) => void;

    handleNonPersistentDropDownDemoFetchButton: (status: boolean) => void;

    nonPersistentValue: SelectOption | null;
    handleSaveNonPersistentDropDownValue: (param: SelectOption | null) => void;

    nonPersistentDropDownOptionsLoading: boolean;

    firstConnectedDropDownValue: SelectOption | null;
    handleSaveFirstConnectedDropDownValue: (param: SelectOption | null) => void;

    firstConnectedDropDownOptions: SelectOption[] | null;
    handleSaveFirstConnectedDropDownOptions: (param: SelectOption[] | null) => void;

    secondConnectedDropDownValue: SelectOption | null;
    handleSaveSecondConnectedDropDownValue: (param: SelectOption | null) => void;

    secondConnectedDropDownOptions: SelectOption[] | null;
    handleSaveSecondConnectedDropDownOptions: (param: SelectOption[] | null) => void;

    firstConnectedDropDownOptionsLoading: boolean;
    handleFirstConnectedDropDownOptionsLoading: (status: boolean) => void;

    secondConnectedDropDownOptionsLoading: boolean;
    handleSecondConnectedDropDownOptionsLoading: (status: boolean) => void;

    textColor: string;
    handleChangeTextColor: (value: string) => void;

    backGroundColor: string;
    handleChangeBackGroundColor: (value: string) => void;
}

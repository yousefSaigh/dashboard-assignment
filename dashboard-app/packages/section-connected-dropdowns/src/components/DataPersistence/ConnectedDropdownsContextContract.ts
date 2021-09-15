import { SelectOption } from '@test-monorepo/common_types';

export interface ConnectedDropDownsContextContract {
    firstConnectedDropDownOptions: SelectOption[] | null;
    secondConnectedDropDownOptions: SelectOption[] | null;

    firstConnectedDropDownValue: SelectOption | null;
    handleSaveFirstConnectedDropDownValue: (param: SelectOption | null) => void;

    secondConnectedDropDownValue: SelectOption | null;
    handleSaveSecondConnectedDropDownValue: (param: SelectOption | null) => void;

    handleConnectedDropDownFetchButton: (status: boolean) => void;
    handleSecondConnectedDropDownFetch: (status: boolean) => void;

    firstConnectedDropDownOptionsLoading: boolean;

    secondConnectedDropDownOptionsLoading: boolean;
}

import { OptionTypeBase } from 'react-select';
import { SelectOption } from './common_types';

export interface DataPersistenceContextContract {
    nonPersistentDropDownOptions: SelectOption[] | null;
    // saveNonPersistentDropDownOptions: (param: SelectOption[]) => void;

    nonPersistentValue: SelectOption | null;
    handleSaveNonPersistentDropDownValue: (param: SelectOption | null) => void;
}

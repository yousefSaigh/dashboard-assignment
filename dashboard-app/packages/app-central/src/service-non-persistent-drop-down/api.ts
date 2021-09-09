import { SelectOption } from '@test-monorepo/common_types';
import { mockFetchData } from '../common_utilities';
import { FetchDropDownOptionsParameters } from './contracts';

export async function fetchDropDownOptions(parameters: FetchDropDownOptionsParameters): Promise<SelectOption[] | null> {
    if (parameters.shouldReturnNull) {
        const result = await mockFetchData(null, 1500);
        return result;
    } else {
        const mockStructure: SelectOption[] = [
            { value: '1', label: 'option 1' },
            { value: '2', label: 'option 2' },
            { value: '3', label: 'option 3' },
            { value: '4', label: 'option 4' },
        ];

        const result = await mockFetchData(mockStructure, 1500);
        return result;
    }
}

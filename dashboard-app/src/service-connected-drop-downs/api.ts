import { SelectOption } from '../common_types';
import { mockFetchData } from '../common_utilities';
import {
    FetchFirstConnectedDropDownOptionsParameters,
    FetchSecondConnectedDropDownOptionsParameters,
} from './contracts';

export async function fetchConnectedDropDownOptions(
    parameters: FetchFirstConnectedDropDownOptionsParameters,
): Promise<SelectOption[] | null> {
    if (parameters.shouldReturnNull) {
        const result = await mockFetchData(null, 1500);
        return result;
    } else {
        const mockStructure: SelectOption[] = [
            { value: 'red', label: 'red' },
            { value: 'grey', label: 'grey' },
            { value: 'blue', label: 'blue' },
            { value: 'green', label: 'green' },
        ];

        const result = await mockFetchData(mockStructure, 1500);
        return result;
    }
}
export async function fetchSecondConnectedDropDownOptions(
    parameters: FetchSecondConnectedDropDownOptionsParameters,
): Promise<SelectOption[] | null> {
    if (parameters.shouldReturnNull) {
        const result = await mockFetchData(null, 1500);
        return result;
    } else {
        let mockStructure: SelectOption[] = [];
        if (parameters.selectedColor === 'red') {
            mockStructure = [
                { value: 'Crimson', label: 'Crimson' },
                { value: 'Ruby', label: 'Ruby' },
                { value: 'Scarlet', label: 'Scarlet' },
            ];
        } else if (parameters.selectedColor === 'grey') {
            mockStructure = [
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'darkest', label: 'Darkest' },
            ];
        } else if (parameters.selectedColor === 'blue') {
            mockStructure = [
                { value: 'royal', label: 'Royal' },
                { value: 'ocean', label: 'Ocean' },
                { value: 'navy', label: 'Navy' },
            ];
        } else {
            mockStructure = [
                { value: 'fern', label: 'Fern' },
                { value: 'jade', label: 'Jade' },
                { value: 'emerald', label: 'Emerald' },
            ];
        }

        const result = await mockFetchData(mockStructure, 1500);
        return result;
    }
}

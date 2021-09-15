import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { connectedDropDownsModule } from '../module';
import { ScreenViewModel } from './DataPersistence';

export const ConnectedDropDownsScreen = () => {
    return (
        <DynamicModuleLoader modules={[connectedDropDownsModule]}>
            <ScreenViewModel />
        </DynamicModuleLoader>
    );
};

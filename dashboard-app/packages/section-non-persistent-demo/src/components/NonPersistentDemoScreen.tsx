import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { nonPersistenceModule } from '../module';
import { ScreenViewModel } from './DataPersistence';

interface NonPersistentDemoScreenProps {}

export const NonPersistentDemoScreen: React.FunctionComponent<NonPersistentDemoScreenProps> = (
    props: React.PropsWithChildren<NonPersistentDemoScreenProps>,
) => {
    return (
        <DynamicModuleLoader modules={[nonPersistenceModule]}>
            <ScreenViewModel />
        </DynamicModuleLoader>
    );
};

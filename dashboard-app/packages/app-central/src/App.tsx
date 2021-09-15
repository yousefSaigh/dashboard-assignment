import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import styled from 'styled-components';
import { NavigationBar, AboutPage } from './components';
import { DataPersistence } from './components/DataPersistence';
import { Home } from './components/Home';
import { NonPersistentDemoScreen } from '@test-monorepo/section-non-persistent-demo';
import { ConnectedDropDowns } from '@test-monorepo/section-connected-dropdowns';

import { AboutPagePath, ConnectedDropDownPath, HomeDashBoardPath, NonPersistentDropDownPath } from './constants';
// import { getUsersModule } from './module';
import { rootModule } from './store';

const AppStyle = styled.div`
    align-self: center;
    align-content: center;
    align-items: center;
    padding: 15px;
    /* display: flex; */
    justify-content: center;
`;

function App() {
    return (
        <DynamicModuleLoader modules={[rootModule]}>
            <AppStyle>
                <NavigationBar
                    navigationMenus={[
                        HomeDashBoardPath,
                        NonPersistentDropDownPath,
                        ConnectedDropDownPath,
                        AboutPagePath,
                    ]}
                />
                <DataPersistence>
                    <Switch>
                        <Route exact path={HomeDashBoardPath.link}>
                            <Home />
                        </Route>
                        <Route exact path={NonPersistentDropDownPath.link}>
                            <NonPersistentDemoScreen />
                        </Route>
                        <Route exact path={ConnectedDropDownPath.link}>
                            <ConnectedDropDowns />
                        </Route>
                        <Route exact path={AboutPagePath.link}>
                            <AboutPage />
                        </Route>
                    </Switch>
                </DataPersistence>
            </AppStyle>
        </DynamicModuleLoader>
    );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import styled from 'styled-components';
import { NavigationBar } from './components';
import { DataPersistence } from './components/DataPersistence';
import { Home } from './components/Home';
import { NonPersistenceDemo } from './components/NonPersistentDemo';
import { HomeDashBoardPath, NonPersistentDropDownPath } from './constants';
import { getUsersModule } from './module';
import { rootModule } from './module/store';

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
        <DynamicModuleLoader modules={[rootModule, getUsersModule]}>
            <AppStyle>
                <NavigationBar navigationMenus={[HomeDashBoardPath, NonPersistentDropDownPath]} />
                <DataPersistence>
                    <Switch>
                        <Route exact path={HomeDashBoardPath.link}>
                            <Home />
                        </Route>
                        <Route exact path={NonPersistentDropDownPath.link}>
                            <NonPersistenceDemo />
                        </Route>
                    </Switch>

                    {/* <MainApp /> */}
                    {/* add dashboard */}
                </DataPersistence>
            </AppStyle>
        </DynamicModuleLoader>
    );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from './components';


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
    <AppStyle>
    
    <NavigationBar />
    {/* <MainApp /> */}
    {/* add dashboard */}
</AppStyle>
  );
}

export default App;

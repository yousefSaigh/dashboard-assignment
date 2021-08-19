import React from 'react';
import styled from 'styled-components';

interface HomeProps {}

const ComponentLayout = styled.div`
align-self: center;
align-content: center;
align-items: center;
padding: 15px;
display: flex; 
justify-content: center;
`;

export const Home:React.FunctionComponent<HomeProps>=(props:React.PropsWithChildren<HomeProps>,)=> {
  return (
    <ComponentLayout>
      Home
    </ComponentLayout>
  );
}

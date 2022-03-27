import React from 'react';
import Routes from './routes';
import GlobalStyle from './GlobalStyle';
import styled from 'styled-components';
import { Header } from '@components/header/Header';
import { headerList } from '@components/header/headerList';
import { ToastList } from '@components/toast/ToastList';
import { useToastState } from '@hooks/useToast';

function App() {

  const setToastList = useToastState();

  return (
    <div className="App">
      <GlobalStyle/>
      <ToastList/>
      <Container className='flex-center'>
        <Routes setToastList={setToastList}/>
        <Header headerList={headerList}/>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: calc(100% - 15rem);
  
  @media (max-width: 720px) {
    width: 45rem;
    align-items: flex-start !important;
  }
`
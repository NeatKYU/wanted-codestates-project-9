import React from 'react';
import Routes from './routes';
import GlobalStyle from './GlobalStyle';
import { Header } from '@components/header/Header';
import { headerList } from '@components/header/headerList';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header headerList={headerList}/>
      <Routes/>
    </div>
  );
}

export default App;

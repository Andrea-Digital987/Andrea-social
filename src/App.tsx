import React from 'react';
import SocialContextProvider from './context/SocialContext';

import './App.css';
import Layout from './Layout/Layout';

function App() {
  return (
    <>
    <SocialContextProvider>
      <Layout/>
    </SocialContextProvider>
    </>
  );
}

export default App;

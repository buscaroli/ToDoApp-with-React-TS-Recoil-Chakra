import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
);


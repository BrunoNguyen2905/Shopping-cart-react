import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query'
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';

const client = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  ,
  document.getElementById('root')
);



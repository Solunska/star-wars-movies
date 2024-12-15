import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApolloProvider } from '@apollo/client'
import client from './apolloClient.js'
import { DropdownOptionsContextProvider } from './context/DropdownOptionsContext.jsx'
import { FiltersContextProvider } from './context/FiltersContext.jsx'
import {  LanguageContextProvider } from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <FiltersContextProvider>
    <DropdownOptionsContextProvider>
      <ApolloProvider client={client}>
        <LanguageContextProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </LanguageContextProvider>
      </ApolloProvider>
    </DropdownOptionsContextProvider>
  </FiltersContextProvider>,
)

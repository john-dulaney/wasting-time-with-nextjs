import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'

import App from './App'

const client = new ApolloClient({
    networkInterface: createNetworkInterface({ uri: `}
      <P.B>'https://localhost:3000'</P.B>
      {` })
  })

  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ,
    document.getElementById('root')
  )
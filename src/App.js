import React from 'react';

import {Provider} from 'react-redux';
import stores from './stores';
import Wrapper from './pages/Wrapper';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://lottemart.testingnow.me/graphql',
  });
  return (
    <ApolloProvider client={client}>
      <Provider store={stores}>
        <Wrapper />
      </Provider>
    </ApolloProvider>
  );
};

export default App;

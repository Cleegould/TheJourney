import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/NavBar';
import JournalEntry from './pages/journal';
import TODO from '../src/pages/To-Do'
import WelcomePage from './components/WelcomePage';
import Profile from './pages/Profile';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme.js'; //custom theme import

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<WelcomePage />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path="/journal" element={<JournalEntry />} />
          <Route exact path="/todo" element={<TODO />} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Routes>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;

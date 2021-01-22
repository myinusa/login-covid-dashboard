import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import { useAuth0 } from '@auth0/auth0-react';
import theme from 'src/theme';
import routes from 'src/routes';

const App = () => {
  const { isAuthenticated } = useAuth0();
  const routing = useRoutes(routes);

  return (
    isAuthenticated && (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    )
  );
};

export default App;

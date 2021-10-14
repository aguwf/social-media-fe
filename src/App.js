/** @format */

import Routes from './routes';
import React from 'react';
import '@material-tailwind/react/tailwind.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@mui/styles';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  React.useEffect(() => {
    if (prefersDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.getElementById('theme').classList.add('dark');
    } else {
      document.getElementById('theme').classList.remove('dark');
    }
  }, [prefersDarkMode]);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
        shape: {
          borderRadius: 12,
        },
      }),
    [prefersDarkMode],
  );

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div id='theme' className='App w-full min-h-screen'>
            <div className='main w-full m-auto'>
              <Routes />
            </div>
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;

/** @format */

import Routes from './routes';
import React from 'react';
import '@material-tailwind/react/tailwind.css';

function App() {
  React.useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStorage.setItem('theme', 'dark');
      document.getElementById('theme').classList.add('dark');
    } else {
      document.getElementById('theme').classList.remove('dark');
    }
  }, []);
  return (
    <div id='theme' className='App w-full min-h-screen'>
      <div className='main w-full m-auto'>
        <Routes />
      </div>
    </div>
  );
}

export default App;

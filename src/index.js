import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './components/ThemeProvider';
import './Globals.css'


ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider>
        {(changeTheme, isDark)=>{
          return <App changeTheme={changeTheme} isDark={isDark}/>
        }}
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );


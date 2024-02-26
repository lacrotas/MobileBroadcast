import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './Shared.scss';
import App from './App';
import UserStore from './store/UserStore';
import ExpertStrore from './store/ExpertStrore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    expert: new ExpertStrore()
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {mainData} from './data/main';
// import {favoritesData} from './data/favorites';
// import { offerData } from './data/offer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      main={mainData}
      // login
      // notFound
      // favorites={favoritesData}
      // offer={offerData}
    />
  </React.StrictMode>
);

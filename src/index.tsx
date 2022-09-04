import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from './components/Button';

import './services/firebase';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Button/>
  </React.StrictMode>
);

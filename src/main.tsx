import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';

import { getLanguage } from './utils/i18n';

const isPt = getLanguage() === 'pt';
const configToUse = isPt ? CONFIG_PTBR : CONFIG;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GitProfile config={configToUse} />
  </React.StrictMode>,
);

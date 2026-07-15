import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';

const userLang =
  navigator.language ||
  (navigator as Navigator & { userLanguage?: string }).userLanguage;
const isPt = userLang && userLang.toLowerCase().includes('pt');
const configToUse = isPt ? CONFIG_PTBR : CONFIG;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GitProfile config={configToUse} />
  </React.StrictMode>,
);

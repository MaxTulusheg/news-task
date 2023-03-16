import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';

import MainPage from 'views/MainPage/MainPage';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<MainPage />);

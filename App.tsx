import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './src/global/styles/theme';

import { Routes } from './src/routes';


export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  );
}
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './src/global/styles/theme';

import { Routes } from './src/routes';


export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar hidden={true} />
      <Routes />
    </ThemeProvider>
  );
}
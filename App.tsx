import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './src/global/styles/theme';

import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Text>Meu App</Text>
    </ThemeProvider>
  );
}

import React from 'react';
import { ThemeProvider } from 'styled-components'
import Screen from './components/Screen'
import { ReportersProvider } from './hooks/ReportersProvider'
import { MatchesProvider } from './hooks/MatchesProvider'

const theme = {
  colors: {
    lightashgray: '#CCDAD1',
    mediumashgray: '#9CAEA9',
    grayweb: '#788575',
    dimgray: '#6F6866',
    blackcoffee: '#38302E'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReportersProvider>
        <MatchesProvider>
          <Screen />
        </MatchesProvider>
      </ReportersProvider>
    </ThemeProvider>
  );
}

export default App;

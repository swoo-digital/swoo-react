import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import './App.scss'
import Box from './components/Box'
import Button from './components/Button'

const App = () => (
  <ThemeProvider theme={theme}>
    <Box
      display="flex"
      flex="1 1 auto"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg="navy"
    >
      <Box>
        <Button>-1</Button>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        fontSize="64px"
        color="green"
        my="105px"
      >
        1
      </Box>
      <Box>
        <Button>+1</Button>
      </Box>
    </Box>
  </ThemeProvider>
)

export default App

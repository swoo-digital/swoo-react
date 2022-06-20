import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import './App.scss'
import Box from './components/Box'
import Button from './components/Button'
import { useAppSelector, useAppDispatch } from './hooks'
import { decrement, increment } from './stores/counter'

const App = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const increaseCounter = () => {
    dispatch(increment())
  }

  const decreaseCounter = () => {
    dispatch(decrement())
  }

  return (
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
          <Button onClick={decreaseCounter} data-testid="decreaseButton">
            -1
          </Button>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          fontSize="64px"
          color="green"
          my="105px"
          data-testid="counterContainer"
        >
          {count}
        </Box>
        <Box>
          <Button onClick={increaseCounter} data-testid="increaseButton">
            +1
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App

import React from 'react'
import { BorderProps, ColorProps, SpaceProps } from 'styled-system'

interface ButtonProps extends ColorProps, SpaceProps, BorderProps {
  children?: React.ReactNode
}

export default ButtonProps

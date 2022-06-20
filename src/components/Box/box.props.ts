import {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps
} from 'styled-system'
import React from 'react'

interface BoxProps
  extends FlexboxProps,
    ColorProps,
    LayoutProps,
    TypographyProps,
    SpaceProps {
  children?: React.ReactNode
}

export default BoxProps

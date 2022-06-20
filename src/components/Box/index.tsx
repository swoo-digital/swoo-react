import styled from 'styled-components'
import BoxProps from './box.props'
import { color, flexbox, layout, space, typography } from 'styled-system'

const Box = styled.div<BoxProps>`
  ${color}
  ${flexbox}
  ${layout}
  ${typography}
  ${space}
`

export default Box

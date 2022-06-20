import ButtonProps from './button.props'
import styled from 'styled-components'
import { color, space, border } from 'styled-system'

const Button = styled.button<ButtonProps>`
   {
    border: none;
    cursor: pointer;
    font-size: 24px;
    padding: 16px 70px;
    border-radius: 24px;
  }
  ${color}
  ${space}
  ${border}
`

export default Button

import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { increment, decrement } from '../../features/counter/counterSlice';

type Props = {
  title?: string,
  incrementIt?: boolean
}

const Button:React.FC<Props> = ({title, incrementIt}) => {
  const dispatch = useDispatch()
  return (
    <ButtonContainer 
      onClick={
      incrementIt ? 
      () => dispatch(increment())
      : 
      () => dispatch(decrement())}>
      {title}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button`
  background-color: #181A1C;
  border-radius: 1rem;
  border: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  max-width: 100px;
  padding: 1rem 2.5em;
  font-weight: 700;
  text-align: center;
`;

export default Button;
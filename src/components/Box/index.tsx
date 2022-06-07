import React,{useState} from "react";
import styled from "styled-components";
import { useDispatch , useSelector } from "react-redux";
import { Dispatch } from "redux";
import * as actionTypes from "../../redux/types/counter"
import  state  from "../../redux/state";

const Container = styled.div`
  margin-left: 35%;
  width: 390px;
  height: 844px;
  background-color: #004761;
  overflow: hidden;
`;

const Box = styled.div`
    width: auto; /* 160px */
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: visible;
    margin-top: 80px;
`;

const Text = styled.h1`
  flex-shrink: 0;
  width: 160px;
  height: 71px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  font-weight: 700;
  font-family: "Inter-Bold", "Inter", sans-serif;
  color: #8cd6bd;
  font-size: 64px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;
`

const Button = styled.button`
    box-sizing: border-box;
    flex-shrink: 0;
    width: 160px;
    height: auto; /* 61px */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: #ffffff;
    overflow: visible;
    border-radius: 24px;
    flex-shrink: 0;
    white-space: pre;
    font-weight: 700;
    font-family: "Inter-Bold", "Inter", sans-serif;
    color: #000000;
    font-size: 24px;
    letter-spacing: 0px;
    line-height: 1.2;
  `;

  function Counter() {

    const dispatch : Dispatch  = useDispatch();
    const value = useSelector((store : any)=>store?.counter?.counter)
    return (
      <div className="App">
        <Container>
         <Box>
          <Button onClick={()=>{dispatch({type : actionTypes.DECREASE_COUNTER })}}>-1 </Button>
          <Text>{value}</Text>
          <Button onClick={()=>{dispatch({type : actionTypes.INCREASE_COUNTER })}}>+1 </Button>
         </Box>
        </Container>
      </div>
    );
  }

export default Counter;

import styled from "styled-components";
import Button from "../Button";
import DisplayCounter from "../DisplayCounter";


const BoxContainer = () => {
  return (
    <Box>
      <Button title='+1' incrementIt={true} />
      <DisplayCounter />
      <Button title='-1' incrementIt={false} />
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #00394e;
  min-width: 200px;
  width: 20%;
  padding: 5rem;
  margin: 2rem 0px;
  justify-content: space-around;
  align-items: center;
`;


export default BoxContainer;

// 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
// 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

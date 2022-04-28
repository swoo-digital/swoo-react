import { useAppDispather, useAppSelector } from './hooks';
import { incremented, decremented } from './features/countSlice';
import './App.css';
import Box from './components/Box/box';
import Button from './components/Button/button';

function App() {

  const count = useAppSelector(state => state.count.value);
  const dispatch = useAppDispather();

  const changeCount = (operation : string) => {
    if(operation === 'plus') {
      dispatch(incremented());
    } else {
      dispatch(decremented());
    }
  }
  
  return <div className='App'>
    <Box>
      <Button onClick={(e) => changeCount('minus')}>-1</Button>
      <span className='count'>{count}</span>
      <Button onClick={(e) => changeCount('plus')}>+1</Button>
    </Box>
  </div>
}

export default App;

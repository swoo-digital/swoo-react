import { useAppDispather, useAppSelector } from './hooks';
import { incremented, decremented } from './features/countSlice';
import './App.css';

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
    <div className='counter-wrapper'>
      <button type='button' className='btn' onClick={(e) => changeCount('minus')}>-1</button>
      <span className='count'>{count}</span>
      <button type='button' className='btn' onClick={(e) => changeCount('plus')}>+1</button>
    </div>
  </div>
}

export default App;

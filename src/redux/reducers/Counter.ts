import * as actionTypes from "../types/counter"




const reducer = (
 state :{ counter : number}= { counter : 0},
 action : { type : String } 
) => {

switch (action.type) {

    case actionTypes.INCREASE_COUNTER:
        return {
            ...state,
            counter: state.counter + 1
        };

    case actionTypes.DECREASE_COUNTER:
        return {
            ...state,
            counter: state.counter - 1
        };

    default:
       return state;
    }
};
  
  export default reducer;
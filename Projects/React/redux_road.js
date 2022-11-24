const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200,
}


const reducer = (state = initialWagonState, action) => {
  switch (action.type) {

  case 'gather': {
    return { 
        ...state,
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1,
        cash: state.cash
        };
    }
  case 'travel': {
    if(state.supplies - ( 20 * action.payload) <= 0) {
        return state;
    }else{
        return {
        ...state,
        supplies: state.supplies - 20 * action.payload,
        distance: state.distance  +  10 * action.payload,
        days: state.days + action.payload,
        cash: state.cash
      }
    }

  }

  case 'tippedWagon': {
    return {
        ...state,
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1,
        cash: state.cash
    }
  } 
  // EXTRA ADDITIONS

  case 'sell': {
    
    //Handle negative supplies
    if(state.supplies - 20 <= 0) {
      return state;
    }else{
      return {
        ...state,
        supplies: state.supplies - 20,
        distance: state.distance,
        days: state.days,
        cash: state.cash + 5
    }

    }
  } 

  case 'buy': {
    //Handle negative cash
    if(state.cash - 15 <= 0) {
      return state;
    }else{
      return {
        ...state,
        supplies: state.supplies + 25,
        distance: state.distance,
        days: state.days,
        cash: state.cash - 15
    }
    }
  } 

  case 'theft': {
    return {
        ...state,
        supplies: state.supplies,
        distance: state.distance,
        days: state.days,
        cash: state.cash / 2
    }
  } 

  default:
    return state
  }
};

let wagon = reducer(undefined, {});

wagon = reducer(wagon, {type: 'travel', payload: 1});
wagon = reducer(wagon, {type: 'gather'});
wagon = reducer(wagon, {type: 'tippedWagon'});
wagon = reducer(wagon, {type: 'travel', payload: 3});
wagon = reducer(wagon, {type: 'buy'});
wagon = reducer(wagon, {type: 'sell'});
wagon = reducer(wagon, {type: 'theft'});


console.log(wagon)

const stateDefault = {
    count: 10
}
  
export const cashReducer = (state = stateDefault, action) => {
    switch (action.type) {
      case 'ADD_MONEY':
        return {...state, count: state.count + action.payload}
  
      case 'GET_MONEY':
        return {...state, count: state.count - action.payload}
    
      default:
        return state
    }
}
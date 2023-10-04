const stateDefault = {
    clients: []
}
  
  export const customerReducer = (state = stateDefault, action) => {
    switch (action.type) {
      case 'SHOW_ALL_CLIENTS':
        return {...state, clients: [...state.clients, ...action.payload]}
    
      default:
        return state
    }
}

export const showAllClients = (payload) => ({type: 'SHOW_ALL_CLIENTS', payload})
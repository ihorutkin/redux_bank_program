import { showAllClients } from "../store/customerReducer"

export function addAllClients(){
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(showAllClients(json)))
    }
}
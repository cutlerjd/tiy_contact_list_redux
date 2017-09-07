import * as actions from './contactActionTypes'
import store from '../store'

export function loadUsers() {
    let URL = 'https://randomuser.me/api/?seed=foobar&results=50'
    fetch(URL)
        .then(response => response.json())
        .then(data => (
            {
                type: actions.LOAD_DATA,
                users: data.results
            })
        )
        .then(function(obj){
            console.log(obj)
            store.dispatch(obj)
        })
        .catch(console.log)
}
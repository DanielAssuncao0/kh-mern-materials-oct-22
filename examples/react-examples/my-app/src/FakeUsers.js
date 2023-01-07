import axios from 'axios';
import {useState} from 'react';
export function FakeUsers() {
    let [users, setUsers] = useState([]);
    let refresh = (e) => {
        // JSON placeholder has this below URL with HTTP GET
        let url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url)
        .then(res => setUsers(res.data))
        .catch(err => console.log(err));
    }
    return (<div>
        <h2>Fake Users from JSON placeholder</h2>
        <div>
            <button onClick = {refresh}>Reload</button>
        </div>
        <div>
            {
                users.map((value, index) => 
                <p key = {index}>Name = {value.name}, Id = {value.id}</p>)
            }
        </div>
    </div>)
}
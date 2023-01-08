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
export function SearchUser() {
// show the user details in a table that will have columns like id, name, street, city, zipcode
    let [user, setUser] = useState();
    let handleChange = (e) => {
        let userId = e.target.value;
        let url =   `https://jsonplaceholder.typicode.com/users/${userId}`;
        axios.get(url)
        .then(response => setUser(response.data))
        .catch(err => console.log(err));
    }
    return (<div>
        <h2>Search User Component</h2>
        <div>
            Enter Id <input type = "number" name = "id" onChange = {handleChange} 
            autoComplete='off'></input>
        </div>
        <table className = "table">
            <thead>
                <tr>
                    <th>Id</th><th>Name</th><th>Street</th><th>City</th><th>Zipcode</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{user?.id}</td><td>{user?.name}</td><td>{user?.address?.street}</td>
                    <td>{user?.address?.city}</td><td>{user?.address?.zipcode}</td>
                </tr>
            </tbody>
        </table>
    </div>)
}
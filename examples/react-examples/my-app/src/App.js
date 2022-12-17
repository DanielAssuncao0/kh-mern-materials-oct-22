import logo from './logo.svg';
import './App.css';

function App() {
  let names = ["Sachin", "Mike", "Harison"];
  let employees = [
    {id:100, name:"Alex", salary:3500, address: {state:"KA", city:"BLR"}},
    {id:200, name:"Bruce", salary:4500, address: {state:"KA", city:"MYS"}}
  ];
  return (
    <div>
      <h1>Root Component</h1>
      <button className = "btn btn-danger">My Button</button>
      {names.map( (item, index) =>  <p key = {index}>Hello {item}!</p>)}
      <div>
        <h3>List of users</h3>
        <ol>
          {names.map( (item, index) => <li className = "list" key = {index}>{item}</li>)}
        </ol>
      </div>
      <div>
        <h2>List of employees</h2>
        <table className = "table">
          <thead>
            <tr>
              <th>ID</th><th>NAME</th><th>SALARY</th><th>STATE</th><th>CITY</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((item, index)=> <tr key = {index}>
              <td>{item.id}</td><td>{item.name}</td><td>{item.salary}</td>
              <td>{item.address.state}</td><td>{item.address.city}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

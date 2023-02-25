import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from 'react';

function StoreForm() {
  let [_id, setId] = useState();
  let [name, setName] = useState();
  let [salary, setSalary] = useState();
  let handleSubmit = (event) => {
    event.preventDefault();
    let URL = 'http://localhost:8080/employees';
    axios.post(URL, {"_id": _id, "name": name, "salary": salary})
    .then((response) => {
      setId(''); setName(''); setSalary('');
    })
    .catch(err => console.log(err))
  }
  return (<div>
    <h1>Employee Registration Form</h1>
    <form onSubmit = {handleSubmit}>
      <div className = 'form-group'>
      <input type = 'number' name = 'id' value = {_id} placeholder = 'Enter id'
      autoComplete='off' 
      className = 'form-control' onChange = {e => setId(e.target.value)}></input>
      </div>
      <div className = 'form-group'>
      <input type = 'text' name = 'name' value = {name} placeholder = 'Enter name'
      autoComplete='off'
      className = 'form-control' onChange = {e => setName(e.target.value)}></input>
      </div>
      <div className = 'form-group'>
      <input type = 'number' name = 'name' value = {salary} placeholder = 'Enter salary'
      autoComplete='off'
       className = 'form-control' onChange = {e => setSalary(e.target.value)}></input>
      </div>
      <div>
        <input type = "submit" className = 'btn btn-primary' value = "Store"></input>
      </div>
    </form>
  </div>)
}

function FetchEmployees() {
  let [employees, setEmployees] = useState([]);
  let URL = 'http://localhost:8080/employees';
  let fetch = () => {
    
    axios.get(URL)
    .then(response => setEmployees(response.data))
    .catch(error => console.log(error))
  }
  return (<div>
    <h1>Display Employees</h1>
    <button onClick = {fetch} className = 'btn btn-secondary'>
      Refresh
    </button>
    <table className = 'table'>
      <thead>
        <tr>
          <th>ID</th><th>NAME</th><th>SALARY</th><th><i className='text-danger'>X</i></th>
        </tr>
      </thead>
      <tbody>
        {
        employees.map((employee, index) => 
        <tr key = {index}>
          <td>{employee._id}</td>
          <td>{employee.name}</td>
          <td>{employee.salary}</td>
          <td><button className = 'btn btn-danger' 
          onClick = {() => 
          axios.delete(`${URL}/${employee._id}`)
          .then(() => {
            axios.get(URL)
            .then(response => setEmployees(response.data))
            .catch(error => console.log(error))
          })
          }>Delete</button></td>
        </tr>)
        }
      </tbody>
    </table>
  </div>)
}

function App() {
  return (
   <div className = 'container-fluid'>
     <h1 className = 'text-center'>Simple React App</h1>
     <div className = 'row'>
       <div className = 'col-4'>
         <StoreForm />
       </div>
       <div className = 'col'>
        <FetchEmployees />
       </div>
     </div>
   </div>
  );
}

export default App;

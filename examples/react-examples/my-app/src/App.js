import logo from './logo.svg';
import './App.css';
import React from 'react';
class Columns extends React.Component {
  render() {
    return (<React.Fragment>
      <td>Column1</td><td>Column2</td>
    </React.Fragment>
  );
  }
}
function Table() {
  return (<div>
    <table className = "table">
      <tbody>
      <tr><Columns /></tr>
      </tbody>
    </table>
  </div>)
}
function App() {
    return (
     <div>
       <Table />
     </div>
  );
}

export default App;

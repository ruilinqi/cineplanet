import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'

function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get('/users').then(res => {
      console.log(res.data.users[0].email);
      let result = res.data.users;
      setUsers(result)
    })
  },[])
  return (
    <div className="App">
      <h2>hello world</h2>
      <h2>{Object.keys(users).map(user => <li>{users[user].email}</li>)}</h2>
    </div>
  );
}

export default App;

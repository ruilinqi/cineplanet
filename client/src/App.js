import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'

function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get('/users').then(res => {
      // console.log(res.data.users[0].email);
      let result = res.data.users;
      setUsers(result)
    })
  },[])
  // console.log("users", {users});
  return (
    <div className="App">
      <h2>hello world</h2>
      <h2>{users.map(user => <li key = {user.id}>{user.email}</li>)}</h2>
    </div>
  );
}

export default App;

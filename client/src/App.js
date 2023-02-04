import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'

function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get('/users').then(res => {
      console.log(res.data.users);
      setUsers(res.data.users)
    })
  },[])
  console.log("users", {users});
  return (
    <div className="App">
      <h2>hello world</h2>
    </div>
  );
}

export default App;

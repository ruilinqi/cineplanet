import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'
import MovieListItem from './components/MovieListItem';
import SliderMovies from './components/SliderMovies';


function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get('/users').then(res => {
      let result = res.data.users;
      setUsers(result)
    })
  },[])
  return (
    <div className="App">
      <h2>hello world</h2>
      <br/>
      {/* <h2>{users.map(user => <li key = {user.id}>{user.email}</li>)}</h2> */}
      <SliderMovies/>
      <MovieListItem/>
    </div>
  );
}

export default App;

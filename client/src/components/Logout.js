import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../providers/AuthProvider";


const Logout = () => {
  const { setAuth } = useContext(AuthContext)

  const handleSubmit = () => {
    setAuth ({user_email: null, password: null})
    window.localStorage.clear()
  }
  return(
      <section className="">
      <p>We will miss you! See you soon!</p>
      <Link to="/"><button onClick={handleSubmit}>Logout</button></Link>
      </section>
  )
}

export default Logout;
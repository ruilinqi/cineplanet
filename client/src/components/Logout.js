import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from "../providers/AuthProvider";


const Logout = () => {
  const { setAuth } = useContext(AuthContext)
  
  const handleSubmit = () => {
    setAuth ({user_email: null, password: null})
    window.localStorage.clear()
    // window.localStorage.removeItem("user_email")
    // window.localStorage.removeItem("password")
  }
  
  return(
    <div className="columns is-centered user-form">
      <div className="column is-three-fifths is-offset-one-fifth">
      <section className="">
      <h2>We will miss you! See you soon!</h2>
      <Link to="/"><button onClick={handleSubmit} className="button is-rounded is-primary button-yellow">Logout</button></Link>
      </section>
      </div>
    </div>
     
  )
}

export default Logout;
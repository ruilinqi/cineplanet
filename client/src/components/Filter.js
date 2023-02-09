import { useEffect } from "react";
import './Filter.css'
function Filter({setActiveGenre,activeGenre,setFiltered,movies}) {

  useEffect(()=> {
    if(activeGenre === 0){
      setFiltered(movies);
      return;
    }
    const filtered = movies.filter((movie) => 
    movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  },[activeGenre])

  return(
    <div className="filter-container">
      <button
       className={activeGenre === 0 ? "active" : ""}
       onClick={() => setActiveGenre(0)}>All</button>
      <button
       className={activeGenre === 18 ? "active" : ""}
       onClick={() => setActiveGenre(18)}>Drama</button>
      <button
       className={activeGenre === 16 ? "active" : ""}
       onClick={() => setActiveGenre(16)}>Animate</button>
      <button
       className={activeGenre === 80 ? "active" : ""}
       onClick={() => setActiveGenre(80)}>Crime</button>
    </div>
  )
}

export default Filter;
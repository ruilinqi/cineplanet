import { useState, useEffect } from "react";
import axios from "axios";
import "./SliderMovie.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2
};
const SliderMovies = () => {
  const [sliders, setSliders] = useState(null)
  useEffect(() => {
    const movieURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=5147ae78ba442bfacb0dba2cfe66bf6f`;
    Promise.all([axios.get(movieURL)])
      .then(all => {
        setSliders(all[0].data.results)
      })
  }, [])

  return (
    <Slider {...settings}>
      {/* {sliders ? <>
        {sliders.map((slider =>
         <img src={`https://image.tmdb.org/t/p/w500${slider.poster_path}`}/>
        ))}
      </> : null} */}
      <div>
            <h3>This is Slider 1</h3>
          </div>
          <div>
            <h3>This is Slider 2</h3>
          </div>
          <div>
            <h3>This is Slider 3</h3>
          </div>
          <div>
            <h3>This is Slider 4</h3>
          </div>
          <div>
            <h3>This is Slider 5</h3>
          </div>
          <div>
            <h3>This is Slider 6</h3>
      </div>
    </Slider>
  )
}
export default SliderMovies;
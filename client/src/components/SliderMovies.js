import { useState, useEffect } from "react";
import axios from "axios";
import "./SliderMovie.css";
import Carousel from 'react-bootstrap/Carousel';

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
    <Carousel fade>
      <Carousel.Item>
      <img src="https://www.themoviedb.org/t/p/original/dNjXm72V84kzKW3qniHzYrBVFoC.jpg"/>
      <Carousel.Caption>
          <h1>The Shawshank Redemption</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.themoviedb.org/t/p/original/AbgEQO2mneCSOc8CSnOMa8pBS8I.jpg"/>
        <Carousel.Caption>
          <h1>The Godfather</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h1>Spirited Away</h1>
        </Carousel.Caption>
        <img src="https://www.themoviedb.org/t/p/original/sRDfWh1x7qVi9R6Y86XVCQzSjVH.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.themoviedb.org/t/p/original/efMhrHXZ4cQgGelVomuhEN3Sk2p.jpg"/>
        <Carousel.Caption>
          <h1>The Dark Knight</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.themoviedb.org/t/p/original/qUroDlCDUMwRWbkyjZGB9THkMgZ.jpg"/>
        <Carousel.Caption>
          <h1>Puss in Boots: The Last Wish</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.themoviedb.org/t/p/original/yhS4HdgT0szo7ftm0QWGQ8hCtqL.jpg"/>
        <Carousel.Caption>
          <h1>Parasite</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default SliderMovies;
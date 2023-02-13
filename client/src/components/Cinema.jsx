import { useEffect, useState } from "react";
import axios from "axios";
const Cinema = () => {
    const [cinemas, setCinemas] = useState([]);

    useEffect(() => {
        axios
        .get("/cinema")
        .then(res => {
            // console.log("res.data", res.data)
            setCinemas(res.data)})

        .catch(err => console.log(err));
    }, []);
    
    return (
        <div>
            <h1>Cinemas</h1>
                <ul>
                {cinemas.map(cinema => (
                    <li key={cinema.id}>
                    <p>Name: {cinema.name}</p>
                    <p>Location: {cinema.location}</p>
                    </li>
                ))}
                </ul>
        </div>
    );
};
    
export default Cinema;
# CinePlanet
Cineplanet is a website that offers users the ability to browse a diverse selection of high-rated and classic movies and purchase movie tickets. The website features a range of movie details, including overviews, ratings, and trailers, to help users make informed decisions about which movie to see. Additionally, Cineplanet provides information on cinemas in Toronto, as well as showtimes for each movie, giving users the flexibility to choose the most convenient time and location.
 
## Features
- Browse movie listings and flip movie cards to view movies' titles, ratings
- View movies by categories
- Search for specific movies by typing movies' names in search bar
- View ratings, overviews, and trailers on the modal after clicking on "More Details"
- Select available cinema location, date, and time, and then buy tickets
- Make payment for tickets using Stripe
- View purchased tickets after payment
- View multiple purchased tickets in the user's order list

## Getting Started
1. Clone the repository
2. Run `npm i` in both \server and \client folders to install dependencies
3. In the \server create .env based on our .env.example
4. On \server run `npm run db:reset` to reset the database with our pre-made assets
5. Go to `http://localhost:8080/cinema/fetch` to fetch cinema locations's data
6. Run:
- On \server run `npm run dev`
- On \client `run npm start`
7. Enjoy the app in the `http://localhost:3000/`

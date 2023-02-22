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

## Final Product
### Homepage
Movie Slider on Home Page
!["Screenshot of Movie Slider on Home Page"](https://github.com/ChunyuBai/cineplanet/blob/main/docs/cineplanet_movie_sliders.PNG)

Movie List on Home Page
!["Screenshot of Movie List on Home Page"](https://github.com/ChunyuBai/cineplanet/blob/main/docs/cineplanet_movie_list.PNG)

### Single Movie Card
Single Movie Card Before flip
!["Screenshot of Single Movie Card Before flip"](https://github.com/ChunyuBai/cineplanet/blob/main/docs/cineplanet_movie_card_before_flip.PNG)

Single Movie Card After flip
!["Screenshot of Single Movie Card After flip"](https://github.com/ChunyuBai/cineplanet/blob/main/docs/cineplanet_movie_card_after_flip.PNG)

### Pop-up Module
Upon clicking the "More Details" button on each individual movie card, multiple popup windows will sequentially appear, allowing the user to view movie's details, select a cinema location and time, make a payment, and confirm their transaction with a successful window.

Movie Details Window
!["Screenshot of Movie Dedtails window"](https://github.com/ChunyuBai/cineplanet/blob/main/docs/cineplanet_movie_details_window.PNG)

Select Cinema Location, Date and Time Window
!["Screenshot of Select Cinema Location, Date and Time Window"](https://github.com/ChunyuBai/cineplanet/blob/main/docs/cineplanet_buy_tickets.PNG)

Payment Window
!["Screenshot of Payment window"](https://github.com/ChunyuBai/cineplanet/blob/main/docs/cineplanet_payment.PNG)

Successful transaction Window
!["Screenshot of Successful transaction Window"](https://github.com/ChunyuBai/cineplanet/blob/main/docs/cineplanet_purchased_tickets.PNG)

### Purchased Tickets View
Users can view their purchased tickets by clicking on their user avatar after completing their purchase.

Purchased Tickets View
!["Screenshot of Tickets View"](https://github.com/ChunyuBai/cineplanet/blob/main/docs/cineplanet_user's_tickets_view.PNG)

## Getting Started
1. Clone the repository
2. Run `npm i` in both \server and \client folders to install dependencies
3. In the \server create .env based on our .env.example
4. On \server run `npm run db:reset` to reset the database with our pre-made assets
5. Go to `http://localhost:8080/cinema/fetch` to fetch cinema locations's data
6. Run:
- On \server run `npm run dev`
- On \client run `npm start`
7. Enjoy the app in the `http://localhost:3000/`

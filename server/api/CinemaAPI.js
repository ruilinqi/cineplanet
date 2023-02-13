const axios = require("axios");
const pool = require('../configs/db.config')
require('dotenv').config(); 
const { URL } = require('url');
const getCinemas = async () => {
  const cinemaURL = new URL ("/search.json", "https://serpapi.com");
  cinemaURL.searchParams.append("q","cinema"); // build query string
  cinemaURL.searchParams.append("location","toronto"); 
  cinemaURL.searchParams.append("tbm","lcl"); 
  cinemaURL.searchParams.append("api_key","ac1fbff6a68356c57fadf62795018f5986b824437c836c26c57e37ba4d43ceb5"); 
  cinemaURL.searchParams.append("engine","google"); 
  const response = await axios.get(cinemaURL);
  // console.log("response", response.data);
  // console.log(response.data["local_results"]);
  
  const localResults = response.data["local_results"];
  
  localResults.forEach(async result => {
    const queryText = `INSERT INTO cinemas (name, location) VALUES ('${result.title}', '${result.hours}')`;
    await pool.query(queryText);
  });
}

module.exports = { getCinemas };

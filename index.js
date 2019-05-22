const express = require("express");

const app = express();

app.get("/", (req, res) => res.send({ message: "Hello from my app!" }));

// Important: port must be read from the environment for Heroku
const port = process.env.PORT || 3000;

console.log(`Listening at port ${port}`);

app.listen(port);

const axios = require("axios");
const url =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=S8qOkuUQwRGgue2rzIQ9ZeTPHC3dABNh";
const getData = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getData(url);

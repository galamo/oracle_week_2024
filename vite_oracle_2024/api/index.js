const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/employees", async (req, res, next) => {
  try {
    setTimeout(async () => {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      // console.log(data);
      res.json(data.results);
    }, 3000);
  } catch (error) {
    res.json({ message: "something went wrong " });
  }
});

app.listen(4500);

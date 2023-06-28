const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/piyush", (req, res) => {
  res.json("piyush mahajan");
});
app.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      // if (check.password === password) {
      //     res.send("login success");
      // } else {
      //     res.send("password is wrong");
      // }
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (err) {
    res.json("not exist bro");
  }
});
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      // if (check.password === password) {
      //     res.send("login success");
      // } else {
      //     res.send("password is wrong");
      // }
      res.json("exist");
    } else {
      res.json("not exist");
      await collection.insertMany([data]);
    }
  } catch (err) {
    res.json("not exist");
  }
});
app.listen(5000, () => {
  console.log("port is running ");
});

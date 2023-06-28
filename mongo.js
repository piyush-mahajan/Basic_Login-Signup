const mongoose = require("mongoose");

mongoose
  .connect(
    //add the mongoDB connection string here
    ""
  )

  .then(() => {
    console.log("mongo db is connected ");
  })
  .catch(() => {
    console.log("failed");
  });

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const collection = mongoose.model("collection", userSchema);
module.exports = collection;

const mongoose = require("mongoose");
const url = process.env.MONGO;

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Mongodb connected");
    } else {
      console.log(err);
    }
  }
);

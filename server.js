const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const cars = require("./routes/api/cars");

const app = express();
var cors = require("cors");

//Body Parser middlware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

//Use Routes
app.use("/api/cars", cars);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = 5000;

app.listen(port, () => console.log(`Server is running at port ${port}`));

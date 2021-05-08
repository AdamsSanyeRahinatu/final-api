const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDb = require("./configurations/connectDb");
const trackersRoute = require("./routes/trackersRoute");
const usersRoute = require("./routes/usersRoute");
const cors = require("cors");

dotenv.config();

const app = express();

//connection
connectDb();

//middleware
app.use(express.json());

app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/v1/trackers", trackersRoute);
app.use("/api/v1/users", usersRoute);

//home route
app.get("/", (req, res) => {
  res.send("<h1>TRACKER'S API</h1>");
});
const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`server started ${port}`));

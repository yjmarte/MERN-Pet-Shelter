const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/pet.routes")(app);

const server = app.listen(port, () =>
  console.log(`Server initialized on port ${server.address().port}`)
);

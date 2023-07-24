const express = require("express");
const cors = require('cors')
const app = express();
const carRoutes = require("./routes/carRoutes");

app.use(cors())

app.use(express.json());

app.use("/cars", carRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

require("dotenv").config();

const env = require("./src/config/env.js");

const app = require("./src/app.js");
const connectDB = require("./src/config/connectDB.js");

const PORT = env.PORT;

app.listen(PORT, async () => {
   await connectDB();
    console.log(`Server is listening on PORT ${PORT}`);
})
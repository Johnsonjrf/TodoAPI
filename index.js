const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routes/userRoutes");



const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT||8080;

const live_url = process.env.MONGO_URI

                    mongoose.connect(live_url)
                    .then(() => console.log("connected to database"))
                    .catch(err => err.message)

app.use("/todo", route);

                    app.get("/", (req, res) => {
    res.send("Hello World");
})

                    app.listen(port, () => {
    console.log(`server listening at port ${port}`);
})
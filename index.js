const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

const formRoutes = require("./routes/form.route");

const connectDB = require("./db/index")

app.use(cors());
app.use(express.json());

/* ROUTES */
app.use("/api/v1", formRoutes);

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!!", err);
})
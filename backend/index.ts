import express, { json } from 'express'
import router from './api/routes/index'
require("dotenv").config()
const app = express()  

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
   
app.use("/api/v1",router)
app.listen(3001, () => {
    console.log(process.env.DB_HOST);
  });
import express, { json } from 'express'
const app = express()

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(process.env.PORT, () => {
    console.log("hi");
  });
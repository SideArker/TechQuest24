import express from 'express'
const app = express()

app.get('/', (res,req) =>{
    req.send(`<h1>hello</h1>`)
})
app.listen(3001, () => {
    console.log(`[server]: Server is running at http://localhost:3001`);
  });
const express = require('express')
const cors = require('cors');
// const Student = require('./models/studentModel')
const app = express()
const port = 3000
// require('./connection')


app.use(cors({
    // origin: 'http://localhost:4200',
    origin: '*',
  }));

app.get('/hello',(req,res)=>{
    res.send('Hello Ptm from http://141.148.201.28/');
})
app.use(express.json())
// app.use(require('./routes/studentRoutes'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

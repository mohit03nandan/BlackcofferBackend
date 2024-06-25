const express = require('express')

const app = express()





const port = process.env.PORT || 3000;
const host = process.env.Host || 'localhost';

app.listen(port,()=>{
    console.log(`Server is running on ${host}:${port}`)
})
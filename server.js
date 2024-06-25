const express = require('express')
const connect = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const AddData = require('./Route/AddData');
const bodyParser = require('body-parser');





dotenv.config();
const app = express()

connect();
// app.use(bodyParser.json({limit: '10mb', extended: true}))
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/add', AddData);


app.get('/health', (req, res) => {
    res.send(`Backend server is active. Status: active & time: ${new Date()}`);
});


const port = process.env.PORT || 3000;
const host = process.env.Host || 'localhost';

app.listen(port,()=>{
    console.log(`Server is running on ${host}:${port}`)
})
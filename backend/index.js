const express=require('express')
const app=express()
const cors = require('cors');
const mongoose=require('mongoose')
const authRoutes = require('./routes/authRoutes');
const dotenv=require('dotenv/config');

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}))

app.use(express.json())


app.use('/', authRoutes);








const connessioneDb= async()=>{
    try{
        await mongoose.connect(process.env.DBURI);
        console.log("db ok")
    }catch(err){
        console.log("errore connessione al db")
    }
}

app.listen(3000, () => {
    console.log("Server ok");
    connessioneDb()
});

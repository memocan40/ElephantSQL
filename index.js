const express = require('express');
const {Pool}  = require('pg');
const app     = express();
const port      =3000;


const pool = new Pool({
    user:"imytfntr",
    host:"ziggy.db.elephantsql.com",
    database:"imytfntr",
    password:"DtDzEob3mc_VnyG4392I7nmIkH5RlSu2",
    port:"5432",
});

app.get("/",(req,res)=>{
    pool.query("SELECT * FROM PERSONS").then(data=>res.json(data))
})
app.listen(port,()=>{console.log("server running")});
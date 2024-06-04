const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "signup"
})

app.post('/signup' ,(req,res) =>{
    const sql="INSERT INTO login('name' ,'email','password')VALUES(?)";
    const values =[
       
    ]

    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        else{
        return res.json(data);
        }
    })
}
)

app.listen(3001, ()=> {
    console.log("listening");
})
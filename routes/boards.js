let boards_api = require('express').Router();
let {db} = require("../db/mysqldb");

boards_api.post('/create', (req, res)=>{
    let {name, made_at} = req.body; // retreive request data
    db.query(`INSERT INTO customers (name, made_at) VALUES ?`, [name, made_at],  // insert data in the db
        (err, result)=>{
            if (err) throw err; // throw err incase any problem shows up
            console.log(result.insertId);

    })
})

module.exports = {boards_api}
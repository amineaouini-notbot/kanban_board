let boards_api = require('express').Router();
let {db} = require("../db/mysqldb");

boards_api.post('/create', (req, res)=>{
    let {name} = req.body; // retreive request data
    db.query(`INSERT INTO boards (name, made_at) VALUES (?, curdate())`, [name],  // insert data in the db
        (err, result)=>{
            if (err) throw err; // throw err incase any problem shows up
            console.log(result.insertId);
            res.status(200).send(result.insertId)
    })
    // console.log(req.body)
})

module.exports = {boards_api}
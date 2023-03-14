let boards_router = require('express').Router();
let {db} = require("../db/mysqldb");

boards_router.post('/create', (req, res)=>{
    let {name} = req.body; // retreive request data
    db.query(`INSERT INTO boards (name, made_at) VALUES (?, curdate())`, [name],  // insert data in the db
        (err, result)=>{
            if (err) throw err; // throw err incase any problem shows up
            res.status(200).send({boardId: result.insertId})
            // when send board id and 200 status after board inserted
    })
})

module.exports = boards_router;
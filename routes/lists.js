let lists_router = require('express').Router();
let {db} = require("../db/mysqldb");

lists_router.post('/create', (req, res)=>{
    let {name, boardId} = req.body; // retreive request data
    db.query(`INSERT INTO lists (name, board_id) VALUES (?, ?)`, [name, boardId],  // insert data in the db
        (err, result)=>{
            if (err) throw err; // throw err incase any problem shows up
            res.status(200).send({listId: result.insertId})
            // when send board id and 200 status after board inserted
    })
})

module.exports = lists_router;
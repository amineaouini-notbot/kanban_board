let lists_router = require('express').Router();
let {db} = require("../db/mysqldb");

lists_router.post('/create', (req, res)=>{
    let {name, boardId} = req.body; // retreive request data
    db.query(`INSERT INTO lists (name, boards_id) VALUES (?, ?)`, [name, boardId],  // insert data in the db
        (err, result)=>{
            if (err) throw err; // throw err incase any problem shows up
            res.status(200).send({listId: result.insertId})
            // when send board id and 200 status after board inserted
    })
})

lists_router.get('/retrieve/:id', (req, res) => {
    let {id} = req.params;
    db.query('SELECT id, name FROM lists WHERE boards_id = (?)', [id], // retrieve lists for opend board in front 
    (err, result)=>{
        if ( err ) throw err; // throw err in case one accures 
        console.log(result.data)
        res.status(200).send(result); // send retrieved lists to front
    })
})
module.exports = lists_router;
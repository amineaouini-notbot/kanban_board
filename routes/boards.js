let boards_api = require('express');
let {db} = require("db/mysqldb.js");

boards_api.post('/create', (req, res)=>{
    let {name, created_at} = req.body;
    
})
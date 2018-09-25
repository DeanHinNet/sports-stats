const db = require('./../../database/index.js');
const axios = require('axios');
const mysql = require('mysql')

db.connect();
// var data = [
//     {id:1, date:"Oli Bob", open:"12", high:"red", dob:""},
  
// ]
// columns:[ //Define Table Columns
//     {title:"Date", field:"date", editor: true, width:150, },
//     {title:"Open", field:"open",  editor: true, align:"left"},
//     {title:"High", field:"high", editor: true,}, 
//     {title:"Low", field:"low", editor: true, sorter:"date", align:"center",},
//     {title:"Close", field:"close", editor: true,}, 
//     {title:"Adj Close", field:"adjClose", editor: true,}, 
//     {title:"Volume", field:"vol", editor: true,}, 
// ],
module.exports = {
    get: (callback)=>{
        const queryStr = "SELECT * FROM mytable"
        db.query(queryStr, (err, data)=>{
            console.log('mysql data', data)
            callback(data)
        })
      
    },
    update: (updates, callback)=>{
        console.log('updates', updates)
        var queries = '';

        updates.forEach((item) => {
            queries += mysql.format(`UPDATE mytable SET ? WHERE id = ${item.id}; `, item);
        });
        console.log(queries)
        db.query(queries, ()=>{
            callback('updated')
        });
    },
}
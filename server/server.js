

const express=require('express');

let app=express();
let port=8080;
let fs = require('fs');
let michelin=new Array();
let maitre=new Array();
fs.readFile("michelin.json", function(err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    michelin.push(JSON.parse(data));

});
fs.readFile("maitre.json", function(err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    maitre.push(JSON.parse(data));

    michelin[0].names.forEach(function (res) {
        if (res in maitre.names){
            console.log("ok");
        }
    })

});

app.get('/michelin',function (req,res) {
    res.send(michelin)
})
app.get('/maitre',function (req,res){
    res.send(maitre)
})

app.listen(port,()=> {
    console.log("server is working !!");
})

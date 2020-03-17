

const express=require('express');
const upper=require('upper-case');
var cors = require('cors');
let app=express();
let port=8080;
let fs = require('fs');
let michelin=new Array();
let maitre=new Array();
fs.readFile("maitre.json", function(err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    maitre.push(JSON.parse(data));

});
fs.readFile("michelin.json", function(err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    michelin.push(JSON.parse(data));

});

app.use(cors());
app.get('/michelin',cors(),function (req,res) {
    res.send(michelin)
})
app.get('/maitre',function (req,res){
    res.send(maitre)
})

app.get('/',function(req,res){
    const names=michelin[0]['names'];
    const locations=maitre[0]['locations'];
    const kitchen=michelin[0]['kitchens_styles'];
    const image=michelin[0]['image_urls'];
    const name=maitre[0]['names'];
    const owner=maitre[0]['owners'];
    let index_michelin=new Array();
    let index_maitre=new Array();

    //finding the intersection of data
    for (let i=0;i<names.length;i++)
    {
        for (let j=0;j<name.length;j++)
        {
            if (upper.upperCase(names[i])==name[j])
            {
                index_michelin.push(i);
                index_maitre.push(j);
            }
        }
    }

    //retrieving all the data
    const result=new Array();
    for (let i=0;i<index_maitre.length;i++)
    {
        result.push({id:i,new_names:names[index_michelin[i]],new_locations :locations[index_maitre[i]],new_kitchens :kitchen[index_michelin[i]],new_images: image[index_michelin[i]],new_owners :owner[index_maitre[i]]});
    }
    res.send(result);
})

app.listen(port,()=> {
    console.log("server is working !!");
})

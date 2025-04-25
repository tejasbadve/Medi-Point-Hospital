var express = require("express"),
app = express(),
bodyparser = require("body-parser"),
mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/Hospital");
var db=mongoose.connection
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


var schema = new mongoose.Schema({
    doctors : String,
    name : String,
    age : String,
    add : String,
    phone: String,
    email: String,
    date : String,
    time : String
}) 
var detailsModel = mongoose.model("detailsModel", schema);
app.get("/", function (req, res) {
    res.render(__dirname + "/demo.ejs");
})
app.get("/getdetails", function (req, res) { 
    db.collection("Cardiology").find(schema, (err, allDetails) =>{
        if (err) {
            console.log(err);
        } else {
            res.render("demo", { Cardiology: allDetails })
        } 
    });
// detailsModel.find({}, function (err, allDetails) {
//     if (err) {
//         console.log(err);
//     } else {
//         res.render("demo", { Cardiology: allDetails })
//     }
// })
})
app.listen(3000, "localhost", function () {
console.log("server has started");
})


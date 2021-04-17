var route = require("express").Router()
var path = require("path")
route.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
})
route.get("/stats", function(req, res){
    res.sendFile(path.join(__dirname,"../public/stats.html"))
})
route.get("/exercise", function(req, res){
    res.sendFile(path.join(__dirname,"../public/exercise.html"))
})
module.exports=route
var route = require("express").Router()
var db = require("../Models/fitnessTracker")
route.get("/api/workouts", function(req, res){
    db.find()
    .then(function(workouts){
        console.log("get", workouts)
        res.json(workouts)
    })
})
route.put("/api/workouts/:id", function(req, res){
    db.findByIdAndUpdate(req.params.id,{$push:{excercises: req.body}},{new:true})
    .then(function(workouts){
        console.log("put", workouts)
        res.json(workouts)
    })
})
route.post("/api/workouts", function(req, res){
    db.create(req.body)
    .then(function(workouts){
        console.log("post", workouts)
        res.json(workouts)
    })
})
route.get("/api/workouts/range", function(req, res){
    db.find.limit(4)
    .then(function(workouts){
        console.log("get", workouts)
        res.json(workouts)
    })
})

module.exports=route
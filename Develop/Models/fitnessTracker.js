const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter workout name"
        },
        distance: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        duration: {
            type: Number,
        }}],
    day: {
        type: Date,
        default: Date.now
    }
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;

const mongoose = require("mongoose")

const MadlibSchema = new mongoose.Schema({

    // name: {
    //     type: String,
    //     required: [true, "Name is required"],
    //     minlength: [3, "Name must be 3 characters or longer"]
    // },

    // type: {
    //     type: String,
    //     required: [true, "Pet type is required"],
    //     minlength: [3, "Pet type must be 3 characters or longer"]

    // },

    // description: {
    //     type: String,
    //     required: [true, "Pet description is required"],
    //     minlength: [3, "Pet description must be 3 characters or longer"]

    // },

    // skillOne: {
    //     type: String
    // },

    // skillTwo: {
    //     type: String
    // },
    
    // skillThree: {
    //     type: String
    // }


}, {timestamps: true});

module.exports = mongoose.model("Madlib", MadlibSchema)
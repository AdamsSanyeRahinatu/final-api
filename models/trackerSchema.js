const mongoose = require("mongoose")

const trackerSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    gender:{
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    password: {
        type: String,
        required:true,
    }

}, {
    timestamps: true,
}
);

const Tracker = mongoose.model("Tracker", trackerSchema)
module.exports= Tracker;

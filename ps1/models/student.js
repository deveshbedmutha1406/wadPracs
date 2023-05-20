let mongoose = require("mongoose");

const studentMarks = new mongoose.Schema({
    name: String,
    RollNo: {
        type: Number,
        max_length: 6
    },
    wad_marks: {
        type: Number,
        min: 0,
        max: 100
    },
    dsbda_marks: {
        type: Number,
        min: 0,
        max: 100
    },
    cc_marks: {
        type: Number,
        min: 0,
        max: 100
    }
});

module.exports = mongoose.model("studentMarks", studentMarks);
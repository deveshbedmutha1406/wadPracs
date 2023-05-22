const mongoose = require("mongoose");

const songs = new mongoose.Schema({
    songname: String,
    film: String,
    music_director: String,
    singer: String
});

module.exports = mongoose.model("Song", songs);

// appliedUsers: {
//     type: [mongoose.SchemaTypes.ObjectId],
//     ref: users
// },
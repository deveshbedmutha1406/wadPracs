const express = require("express");
const mongoose = require("mongoose");
const Songs = require("./models/music");
require("dotenv").config();
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        app.listen(3001, console.log(`server started db connected`));
    } catch (e) {
        console.log(e);
    }
}

app.post("/create", async (req, res) => {
    try {
        const songname = req.body.songname;
        const film = req.body.film;
        const music_director = req.body.music_director;
        const singer = req.body.singer;
        const data = await Songs.create({
            songname: songname,
            music_director: music_director,
            film: film,
            singer: singer
        });
        res.json({ data });
    } catch (e) {
        console.log(e);
    }
})

app.get("/byMusicDirector", async (req, res) => {
    try {
        const name = req.body.name;
        console.log(name);
        const data = await Songs.find({ music_director: name });
        res.json({ data });
    } catch (e) {
        res.json({ e });
    }
})

app.get("/byMusicDirectorSinger", async (req, res) => {
    try {
        const singer = req.body.singer;
        const name = req.body.name;
        const data = await Songs.find({ music_director: name, singer: singer });
        res.json({ data });
    } catch (e) {
        res.json({ e });
    }
})

app.delete("/delete/:songname", async (req, res) => {
    try {
        const songname = req.params.songname;
        console.log(songname);
        const data = await Songs.deleteOne({ songname: songname });
        res.json({ data });

    } catch (e) {
        res.json({ e });
    }
})

start();
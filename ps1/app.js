let mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");

let studentMarks = require("./models/student");

let app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config()


const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("db connected lesgoo");
        app.listen(process.env.PORT, console.log("sever is listening"));
    } catch (err) {
        console.log(err);
    }
}

app.post("/create", async (req, res) => {

    try {
        let name = req.body.name;
        let roll = req.body.roll;
        let wad_marks = req.body.wad_marks;
        let dsbda_marks = req.body.dsbda_marks;
        let cc_marks = req.body.cc_marks;
        const data = await studentMarks.create({
            name: name,
            RollNo: roll,
            wad_marks: wad_marks,
            dsbda_marks: dsbda_marks,
            cc_marks: cc_marks
        });
        res.json({ data });
    } catch (err) {
        res.status(400).json({ err });
    }

})

app.get("/getUsers", async (req, res) => {
    try {
        const data = await studentMarks.find({});
        res.json({ data:data, count: data.length });
    } catch(err) {
        res.json({ err });
    }
})

app.get("/dsbda_filter", async (req, res) => {
    try {
        const data = await studentMarks.find({ dsbda_marks: { $gt: 20 } });
        res.json({ data });
    } catch (err) {
        res.json(err);
    }
})

app.get("/greater_than_25", async (req, res) => {
    try {
        const data = await studentMarks.find({
            $and: [
                { dsbda_marks: { $gt: 25 } },
                { cc_marks: { $gt: 25 } },
                { wad_marks: { $gt: 25 } }
            ]
        });

        // const data = await studentMarks.find().where("dsbda_marks").gt(25).where("cc_marks").gt(25).where("wad_marks").gt(25);

        res.json({ data });
    } catch (err) {
        res.json(err);
    }
});

app.delete("/delete", async (req, res) => {
    try {
        console.log(req.query.name);
        const data = await studentMarks.deleteOne({ name: req.query.name });
        res.status(301).json({ msg: "deleted successfully"});
        
    } catch (err) {
        res.json({ err });
    }

})

app.patch("/updateMarks", async (req, res) => {
    try {
        const dsbda = req.query.dsbda_marks;
        const cc_marks = req.query.cc_marks;
        const wad_marks = req.query.wad_marks;
        const obj = {

        }
        if (dsbda != undefined) {
            obj['dsbda_marks'] = dsbda;
        }
        if (cc_marks != undefined) {
            obj['cc_marks'] = cc_marks;
        }
        if (wad_marks != undefined) {
            obj['wad_marks'] = wad_marks;
        }
        const data = await studentMarks.updateOne({ name: req.query.name }, obj);
        
        res.json({ data });   
    } catch (er) {
        console.log(er);
    }
})

start();
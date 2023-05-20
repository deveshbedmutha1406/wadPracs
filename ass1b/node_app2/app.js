const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("msg from server");
})

app.post("/", (req, res) => {
    const data = {
        name: req.body.fname,
        last_name: req.body.lname
    };
    res.json({ data });
});

const port = 3000;

const start = () => {
    app.listen(port, () => {
        console.log(`server listening at ${port}`);
    })
};

start();
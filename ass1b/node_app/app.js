const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("hello worldd");
});

app.post("/", (req, res) => {
    console.log(req.body);
    // console.log(req);
    res.json({ "msg": `Hello ${req.body.username}` });
  
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is started at port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const db_name = "madlibs_db"
const server = app.listen(port,() => console.log(`Listening on port ${port}`))
const io = require('socket.io')(server);

require("./server/config/mongoose")(db_name);
require("./server/routes/madlibs.routes")(app);

app.use(cors());
app.use(express.json());

var paragraph = []


io.on("connection", socket => {
    
    io.emit("welcome",{msg: "hi there, from the server!"})

    socket.on("addToParagraphOne",data => {
        console.log("the data is in para one" + data.one)
        for (let i = 0; i < data.one.length; i ++) {
            paragraph.push(data.one[i])
        }
        if (paragraph.length === 21) {
            io.emit("updateParagraph",paragraph);
            paragraph.splice(0,paragraph.length)
        }
        console.log(paragraph)
    }),
        
    socket.on("addToParagraphTwo",data => {
        console.log("the data is in para two" + data.two)
        for (let i = 0; i < data.two.length; i ++) {
            paragraph.push(data.two[i])
        }
        if (paragraph.length === 21) {
            io.emit("updateParagraph",paragraph);
            paragraph.splice(0,paragraph.length)
        }
        console.log(paragraph)

    }),
    
    
    socket.on("finalSubmission", data => {
        console.log("final submit")

    })
    
})


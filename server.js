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
var paragraphOne = []
var paragraphTwo = []


io.on("connection", socket => {
    
    io.emit("welcome",{msg: "hi there, from the server!"})

    socket.on("addToParagraphOne",data => {
        console.log("the data is in para one" + data.one)
        for (let i = 0; i < data.one.length; i ++) {
            paragraphOne.push(data.one[i])
        }
        if (paragraphOne.length === 11 && paragraphTwo.length === 10) {
            for (let i = 0; i < paragraphOne.length; i ++) {
                paragraph.push(paragraphOne[i])
            }
            for (let i = 0; i < paragraphTwo.length; i ++) {
                paragraph.push(paragraphTwo[i])
            }
            console.log("inside double if statement paragraph is " + paragraph)
       
        io.emit("updateParagraph",paragraph);
        paragraph.splice(0,paragraph.length)
        paragraph.splice(0,paragraphOne.length)
        paragraph.splice(0,paragraphTwo.length)

        }
        console.log(paragraph)
    }),
        
    socket.on("addToParagraphTwo",data => {
        console.log("the data is in para two" + data.two)
        for (let i = 0; i < data.two.length; i ++) {
            paragraphTwo.push(data.two[i])
        }
        if (paragraphOne.length === 11 && paragraphTwo.length === 10) {
            for (let i = 0; i < paragraphOne.length; i ++) {
                paragraph.push(paragraphOne[i])
            }
            for (let i = 0; i < paragraphTwo.length; i ++) {
                paragraph.push(paragraphTwo[i])
            }
            console.log("inside double if statement paragraph is " + paragraph)
       
        io.emit("updateParagraph",paragraph);
        paragraph.splice(0,paragraph.length)
        paragraph.splice(0,paragraphOne.length)
        paragraph.splice(0,paragraphTwo.length)

        }
        console.log(paragraph)

    }),
    
    
    socket.on("finalSubmission", data => {
        console.log("final submit")

    })
    
})


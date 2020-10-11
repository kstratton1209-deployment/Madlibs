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

//Camp madlib
var paragraph = []
var paragraphOne = []
var paragraphTwo = []


//Cake madlib
var paragraphCake = []
var paragraphOneCake = []
var paragraphTwoCake = []


//Park madlib
var paragraphPark = []
var paragraphOnePark = []
var paragraphTwoPark = []

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

    socket.on("addToParagraphOneCake",data => {
        console.log("the data is in para one" + data.one)
        for (let i = 0; i < data.one.length; i ++) {
            paragraphOneCake.push(data.one[i])
        }
        if (paragraphOneCake.length === 12 && paragraphTwoCake.length === 11) {
            for (let i = 0; i < paragraphOneCake.length; i ++) {
                paragraphCake.push(paragraphOneCake[i])
            }
            for (let i = 0; i < paragraphTwoCake.length; i ++) {
                paragraphCake.push(paragraphTwoCake[i])
            }
            console.log("inside double if statement paragraph is " + paragraph)
       
        io.emit("updateParagraphCake",paragraphCake);
        paragraphCake.splice(0,paragraph.length)
        paragraphCake.splice(0,paragraphOneCake.length)
        paragraphCake.splice(0,paragraphTwoCake.length)

        }
        console.log(paragraph)
    }),
        
    socket.on("addToParagraphTwoCake",data => {
        console.log("the data is in para two" + data.two)
        for (let i = 0; i < data.two.length; i ++) {
            paragraphTwoCake.push(data.two[i])
        }
        if (paragraphOneCake.length === 12 && paragraphTwoCake.length === 11) {
            for (let i = 0; i < paragraphOneCake.length; i ++) {
                paragraphCake.push(paragraphOneCake[i])
            }
            for (let i = 0; i < paragraphTwoCake.length; i ++) {
                paragraphCake.push(paragraphTwoCake[i])
            }
            console.log("inside double if statement paragraph is " + paragraph)
       
        io.emit("updateParagraphCake",paragraphCake);
        paragraphCake.splice(0,paragraph.length)
        paragraphCake.splice(0,paragraphOneCake.length)
        paragraphCake.splice(0,paragraphTwoCake.length)

        }
        console.log(paragraph)

    }),
    
    
    // Park scenario

    socket.on("addToParagraphOnePark",data => {
        console.log("the data is in para one" + data.one)
        for (let i = 0; i < data.one.length; i ++) {
            paragraphOnePark.push(data.one[i])
        }
        if (paragraphOnePark.length === 7 && paragraphTwoPark.length === 8) {
            for (let i = 0; i < paragraphOnePark.length; i ++) {
                paragraphPark.push(paragraphOnePark[i])
            }
            for (let i = 0; i < paragraphTwoPark.length; i ++) {
                paragraphPark.push(paragraphTwoPark[i])
            }
            console.log("inside double if statement paragraph is " + paragraph)
       
        io.emit("updateParagraphPark",paragraphPark);
        paragraphPark.splice(0,paragraph.length)
        paragraphParke.splice(0,paragraphOnePark.length)
        paragraphPark.splice(0,paragraphTwoPark.length)

        }
        console.log(paragraph)
    }),
        
    socket.on("addToParagraphTwoPark",data => {
        console.log("the data is in para two" + data.two)
        for (let i = 0; i < data.two.length; i ++) {
            paragraphTwoPark.push(data.two[i])
        }
        if (paragraphOnePark.length === 7 && paragraphTwoPark.length === 8) {
            for (let i = 0; i < paragraphOnePark.length; i ++) {
                paragraphPark.push(paragraphOnePark[i])
            }
            for (let i = 0; i < paragraphTwoPark.length; i ++) {
                paragraphPark.push(paragraphTwoPark[i])
            }
            console.log("inside double if statement paragraph is " + paragraph)
       
        io.emit("updateParagraphPark",paragraphPark);
        paragraphPark.splice(0,paragraph.length)
        paragraphPark.splice(0,paragraphOneCake.length)
        paragraphPark.splice(0,paragraphTwoCake.length)

        }
        console.log(paragraph)

    })
    

})


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'
import io from 'socket.io-client';



const Park = props => {

    const [socket] = useState(() => io(":8000"));

    const [word1, setWord1] = useState("")
    const [word2, setWord2] = useState("")
    const [word3, setWord3] = useState("")
    const [word4, setWord4] = useState("")
    const [word5, setWord5] = useState("")
    const [word6, setWord6] = useState("")
    const [word7, setWord7] = useState("")
    const [word8, setWord8] = useState("")
    const [word9, setWord9] = useState("")
    const [word10, setWord10] = useState("")
    const [word11, setWord11] = useState("")
    const [word12, setWord12] = useState("")
    const [word13, setWord13] = useState("")
    const [word14, setWord14] = useState("")
    const [word15, setWord15] = useState("")



    const [playerOne, setPlayerOne]=useState([])
    const [playerTwo, setPlayerTwo]=useState([])

    const [playerOneComplete, setPlayerOneComplete] = useState(false)
    const [playerTwoComplete, setPlayerTwoComplete] = useState(false)
    const [paragraph,setParagraph] = useState([])


    useEffect(() => {
        console.log("use effect is running")
        socket.on("welcome", data => console.log(data));
        socket.on("updateParagraphPark", data => setParagraph(data))
        console.log(paragraph)
        return () => socket.disconnect(true)

    },[socket,paragraph])

    useEffect(() => {
        socket.emit("addToParagraphOnePark",{one: playerOne})
    },[playerOne])

    useEffect(() => {
        socket.emit("addToParagraphTwoPark",{two: playerTwo})
    },[playerTwo])



    // const setOneSocket = () => {
    //     console.log(playerOne)
    //     socket.emit("addToParagraphOne",{one: playerOne})
    // }

    // const setTwoSocket = () => {
    //     socket.emit("addToParagraphTwo",{two: playerTwo})
    // }

    const setFinalSocket = () => {
        socket.emit("finalSubmission")
    }

    const checkIfComplete = () => {
        if (playerOneComplete === true && playerTwoComplete === true) {
            setFinalSocket();
            console.log("both players have submitted")
        }
        else {
            console.log("both players have not submitted")
        }
        
    }

    const addPlayerOne = (e) => {
        setPlayerOneComplete(true);
        console.log("adding player one...")
        e.preventDefault()
        let wordArray = [word1, word2, word3, word4, word5, word6, word7]
        setPlayerOne(wordArray);
        console.log("player one word array" + wordArray);
        // setOneSocket();
        checkIfComplete();
        }



    const addPlayerTwo = (e) => {
        setPlayerTwoComplete(true);
        console.log("adding player one...")
        e.preventDefault()
        let wordArray = [word8, word9, word10, word11, word12, word13, word14, word15]
        setPlayerTwo(wordArray);
        console.log("player two word array" + wordArray);
        // setOneSocket();
        checkIfComplete();
        }


    

    return(

        <div className="content">
                {/* <!-- Navigation--> */}
                    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                        <div class="container">
                            <a class="navbar-brand js-scroll-trigger" href="#page-top">MADLIBS</a>
                            <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                Menu
                                <i class="fas fa-bars"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    {/* <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Get started</a></li> */}
                                    <Link class="nav-link py-3 px-0 px-lg-3 mx-lg-1 rounded js-scroll-trigger text-white" to="/">Get started</Link>

                                    <Link class="nav-link py-3 px-0 px-lg-3 mx-lg-1 rounded js-scroll-trigger text-white" to="/">How to play</Link>
                                   
                                </ul>
                            </div>
                        </div>
                    </nav>
                {/* <!-- Contact Section--> */}
                    <div className="row">
                        <div className="col">
                            <section class="page-section" id="contact">
                                <div class="container">
                                    {/* <!-- Contact Section Heading--> */}
                                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Player One</h2>
                                    {/* <!-- Contact Section Form--> */}
                                    <div class="row">
                                        <div class="col-lg-8 mx-auto">
                                            {/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.--> */}
                                            <form novalidate="novalidate" onSubmit={addPlayerOne}>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Noun</label>
                                                        <input class="form-control" id="word1" type="text" placeholder="Noun" required="required" data-validation-required-message="Please enter a noun." onChange={e => setWord1(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls">
                                                        <label>Article of clothing</label>
                                                        <input class="form-control" id="word2" type="text" placeholder="Article of clothing" required="required" data-validation-required-message="Please enter an article of clothin." onChange={e => setWord2(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word3" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord3(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word4" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord4(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Noun</label>
                                                        <input class="form-control" id="word5" type="text" placeholder="Noun" required="required" data-validation-required-message="Please enter a noun." onChange={e => setWord5(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Plural noun</label>
                                                        <input class="form-control" id="word6" type="text" placeholder="Plural noun" required="required" data-validation-required-message="Please enter a plural noun." onChange={e => setWord6(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Noun</label>
                                                        <input class="form-control" id="word7" type="text" placeholder="Noun)" required="required" data-validation-required-message="Please enter a noun." onChange={e => setWord7(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <br />
                                                <div id="success"></div>
                                                <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Submit</button></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col">
                        <section class="page-section" id="contact">
                                <div class="container">
                                    {/* <!-- Contact Section Heading--> */}
                                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Player Two</h2>
                                    {/* <!-- Contact Section Form--> */}
                                    <div class="row">
                                        <div class="col-lg-8 mx-auto">
                                            {/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.--> */}
                                            <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={addPlayerTwo}>
                                            <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word8" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord8(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                       
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Type of food</label>
                                                        <input class="form-control" id="word9" type="text" placeholder="Type of food" required="required" data-validation-required-message="Please enter a type of food." onChange={e => setWord9(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Type of liquid</label>
                                                        <input class="form-control" id="word10" type="text" placeholder="Type o liquid" required="required" data-validation-required-message="Please enter a type of liquid" onChange={e => setWord10(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Part of the body</label>
                                                        <input class="form-control" id="word11" type="text" placeholder="Part of the body" required="required" data-validation-required-message="Please enter a part of the body." onChange={e => setWord11(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Plural Noun</label>
                                                        <input class="form-control" id="word12" type="text" placeholder="Plural noun" required="required" data-validation-required-message="Please enter a plural noun." onChange={e => setWord12(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Plural Noun</label>
                                                        <input class="form-control" id="word13" type="text" placeholder="Plural noun" required="required" data-validation-required-message="Please enter a plural noun." onChange={e => setWord13(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Animal</label>
                                                        <input class="form-control" id="word14" type="text" placeholder="Animal" required="required" data-validation-required-message="Please enter an animal." onChange={e => setWord14(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Noun</label>
                                                        <input class="form-control" id="word15" type="text" placeholder="Plural noun" required="required" data-validation-required-message="Please enter a noun." onChange={e => setWord15(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <br />
                                                <div id="success"></div>
                                                <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Submit</button></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                       
                    </div>

                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-4">A day at the amusement Park</h2>
                      
                        { paragraph.length === 15 ? 
                        <h3> 
                        An amusement park is always fun to visit on a hot summer {paragraph[0]}. When you get there, you can wear your {paragraph[1]} and go for a swim. And there are lots of {paragraph[2]} things to eat. You can start off with a/an {paragraph[3]}-dog on a/an {paragraph[4]} with mustard, relish, and {paragraph[5]} on it. Then you can have a buttered ear of {paragraph[6]} with a nice {paragraph[7]} slice of {paragraph[8]} and a big bottle of cold {paragraph[9]}. When you are full, it's time to go on the roller coaster, which should settle your {paragraph[10]}. Other amusement park rides are the bumper cars, which have little {paragraph[11]} that you drive and run into other {paragraph[12]}, and the merry-go-round, where you can sit on a big {paragraph[13]} and try to grab the gold {paragraph[14]} as you ride past it.</h3> : null }

        </div>
    )
}

export default Park;




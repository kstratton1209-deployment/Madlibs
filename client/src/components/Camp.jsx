import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'
import io from 'socket.io-client';



const Camp = props => {

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
    const [word16, setWord16] = useState("")
    const [word17, setWord17] = useState("")
    const [word19, setWord19] = useState("")
    const [word20, setWord20] = useState("")
    const [word21, setWord21] = useState("")
    const [word22, setWord22] = useState("")

    const [playerOne, setPlayerOne]=useState([])
    const [playerTwo, setPlayerTwo]=useState([])

    const [playerOneComplete, setPlayerOneComplete] = useState(false)
    const [playerTwoComplete, setPlayerTwoComplete] = useState(false)
    const [paragraph,setParagraph] = useState([])


    useEffect(() => {
        console.log("use effect is running")
        socket.on("welcome", data => console.log(data));
        socket.on("updateParagraph", data => setParagraph(data))
        console.log(paragraph)
        return () => socket.disconnect(true)

    },[socket,paragraph])

    useEffect(() => {
        socket.emit("addToParagraphOne",{one: playerOne})
    },[playerOne])

    useEffect(() => {
        socket.emit("addToParagraphTwo",{two: playerTwo})
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
        let wordArray = [word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11]
        setPlayerOne(wordArray);
        console.log("player one word array" + wordArray);
        // setOneSocket();
        checkIfComplete();
        }

    const addPlayerTwo = (e) => {
        setPlayerTwoComplete(true);
        e.preventDefault()
        console.log("adding player two...")
        let wordArray = [word12, word13, word14, word15, word16, word17, word19, word20, word21, word22]
        setPlayerTwo(wordArray)
        console.log("player two word array" + wordArray);
        // setTwoSocket();
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
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Get started</a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">How to play</a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a></li>
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
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word1" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord1(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls">
                                                        <label>Person</label>
                                                        <input class="form-control" id="word2" type="text" placeholder="Person" required="required" data-validation-required-message="Please enter a person." onChange={e => setWord2(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Place</label>
                                                        <input class="form-control" id="word3" type="text" placeholder="Place" required="required" data-validation-required-message="Please enter a place." onChange={e => setWord3(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Piece of clothing</label>
                                                        <input class="form-control" id="word4" type="text" placeholder="Piece of clothing" required="required" data-validation-required-message="Please enter a piece of clothing." onChange={e => setWord4(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word5" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord5(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word6" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord6(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word7" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord7(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word8" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord8(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Song title</label>
                                                        <input class="form-control" id="word9" type="text" placeholder="Song title" required="required" data-validation-required-message="Please enter a song title." onChange={e => setWord9(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Food</label>
                                                        <input class="form-control" id="word10" type="text" placeholder="Food" required="required" data-validation-required-message="Please enter a food." onChange={e => setWord10(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word11" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord11(e.target.value)}/>
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
                                                        <label>Past tense verb</label>
                                                        <input class="form-control" id="word12" type="text" placeholder="Past tense verb" required="required" data-validation-required-message="Please enter a past tense verb." onChange={e => setWord12(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Noun</label>
                                                        <input class="form-control" id="word13" type="text" placeholder="Noun" required="required" data-validation-required-message="Please enter a noun." onChange={e => setWord13(e.target.value)}/>
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
                                                        <label>Past tense verb</label>
                                                        <input class="form-control" id="word15" type="text" placeholder="Past tense verb" required="required" data-validation-required-message="Please enter a past tense verb." onChange={e => setWord15(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Past tense verb</label>
                                                        <input class="form-control" id="word16" type="text" placeholder="Past tense verb" required="required" data-validation-required-message="Please enter a past tense verb." onChange={e => setWord16(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Noun</label>
                                                        <input class="form-control" id="word17" type="text" placeholder="Noun" required="required" data-validation-required-message="Please enter a noun." onChange={e => setWord17(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Verb</label>
                                                        <input class="form-control" id="word19" type="text" placeholder="Verb" required="required" data-validation-required-message="Please enter a verb." onChange={e => setWord19(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Verb</label>
                                                        <input class="form-control" id="word20" type="text" placeholder="Verb" required="required" data-validation-required-message="Please enter a verb." onChange={e => setWord20(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Verb</label>
                                                        <input class="form-control" id="word21" type="text" placeholder="Verb" required="required" data-validation-required-message="Please enter a verb." onChange={e => setWord21(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word22" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord22(e.target.value)}/>
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

                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-4">Letters from Camp</h2>
                      
                        { paragraph.length === 21 ? 
                        <h3>It was a {paragraph[0]} summer day.{paragraph[1]} and I were excited to go camping at {paragraph[2]}. It was my first time going there. I packed my favorite {paragraph[3]}. It is {paragraph[4]} and {paragraph[5]}. Perfect for camping! On the road we went in our {paragraph[6]}, {paragraph[7]} van! We were listening to {paragraph[8]} all the way down. The drive was about 5 hours but it was so worth it. When we got there we unpacked the van. I could smell {paragraph[9]} being cooked. It smelled {paragraph[10]}. I {paragraph[11]} to the room I was staying in with my {paragraph[12]}. The next thing I knew, a {paragraph[13]} came and {paragraph[14]} on the bed. I heard my mom scream, "Get off the bed!" and I {paragraph[15]} outside. I saw a {paragraph[14]}- it was {paragraph[16]}. Over the next few days I got to {paragraph[17]}, {paragraph[18]}, and {paragraph[19]}. My camping trip was {paragraph[20]}.</h3> : null
                        }

        </div>
    )
}

export default Camp;




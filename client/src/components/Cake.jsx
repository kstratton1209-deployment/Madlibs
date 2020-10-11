import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'
import io from 'socket.io-client';



const Cake = props => {

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
    const [word18, setWord18] = useState("")
    const [word19, setWord19] = useState("")
    const [word20, setWord20] = useState("")
    const [word21, setWord21] = useState("")
    const [word22, setWord22] = useState("")
    const [word23, setWord23] = useState("")



    const [playerOne, setPlayerOne]=useState([])
    const [playerTwo, setPlayerTwo]=useState([])

    const [playerOneComplete, setPlayerOneComplete] = useState(false)
    const [playerTwoComplete, setPlayerTwoComplete] = useState(false)
    const [paragraph,setParagraph] = useState([])


    useEffect(() => {
        console.log("use effect is running")
        socket.on("welcome", data => console.log(data));
        socket.on("updateParagraphCake", data => setParagraph(data))
        console.log(paragraph)
        return () => socket.disconnect(true)

    },[socket,paragraph])

    useEffect(() => {
        socket.emit("addToParagraphOneCake",{one: playerOne})
    },[playerOne])

    useEffect(() => {
        socket.emit("addToParagraphTwoCake",{two: playerTwo})
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
        let wordArray = [word1, word2, word3, word4, word5, word6, word7, word8, word9, word10, word11, word12]
        setPlayerOne(wordArray);
        console.log("player one word array" + wordArray);
        // setOneSocket();
        checkIfComplete();
        }



    const addPlayerTwo = (e) => {
        setPlayerTwoComplete(true);
        console.log("adding player one...")
        e.preventDefault()
        let wordArray = [word13, word14, word15, word16, word17, word18, word19, word20, word21, word22, word23]
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
                                                        <label>Verb-ing</label>
                                                        <input class="form-control" id="word1" type="text" placeholder="Verb-ing" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord1(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word2" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter a person." onChange={e => setWord2(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word3" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter a place." onChange={e => setWord3(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Plural noun</label>
                                                        <input class="form-control" id="word4" type="text" placeholder="Plural noun" required="required" data-validation-required-message="Please enter a piece of clothing." onChange={e => setWord4(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Food</label>
                                                        <input class="form-control" id="word5" type="text" placeholder="Food" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord5(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Food</label>
                                                        <input class="form-control" id="word6" type="text" placeholder="Food" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord6(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Food (plural)</label>
                                                        <input class="form-control" id="word7" type="text" placeholder="Food (plural)" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord7(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Food</label>
                                                        <input class="form-control" id="word8" type="text" placeholder="Food" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord8(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Verb</label>
                                                        <input class="form-control" id="word9" type="text" placeholder="Verb" required="required" data-validation-required-message="Please enter a song title." onChange={e => setWord9(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word10" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter a food." onChange={e => setWord10(e.target.value)}/>
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
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Verb</label>
                                                        <input class="form-control" id="word12" type="text" placeholder="Verb" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord11(e.target.value)}/>
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
                                                        <input class="form-control" id="word13" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter a past tense verb." onChange={e => setWord13(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Noun</label>
                                                        <input class="form-control" id="word14" type="text" placeholder="Noun" required="required" data-validation-required-message="Please enter a noun." onChange={e => setWord14(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Verb-ing</label>
                                                        <input class="form-control" id="word15" type="text" placeholder="Verb-ing" required="required" data-validation-required-message="Please enter an animal." onChange={e => setWord15(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Verb</label>
                                                        <input class="form-control" id="word16" type="text" placeholder="Verb" required="required" data-validation-required-message="Please enter a past tense verb." onChange={e => setWord16(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Verb</label>
                                                        <input class="form-control" id="word17" type="text" placeholder="Verb" required="required" data-validation-required-message="Please enter a past tense verb." onChange={e => setWord17(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Color</label>
                                                        <input class="form-control" id="word18" type="text" placeholder="Color" required="required" data-validation-required-message="Please enter a noun." onChange={e => setWord18(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Color</label>
                                                        <input class="form-control" id="word19" type="text" placeholder="Color" required="required" data-validation-required-message="Please enter a verb." onChange={e => setWord19(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Color</label>
                                                        <input class="form-control" id="word20" type="text" placeholder="Color" required="required" data-validation-required-message="Please enter a verb." onChange={e => setWord20(e.target.value)} />
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word21" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter a verb." onChange={e => setWord21(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Verb-ing</label>
                                                        <input class="form-control" id="word22" type="text" placeholder="Verb-ing" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord22(e.target.value)}/>
                                                        <p class="help-block text-danger"></p>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <div class="form-group floating-label-form-group controls mb-0">
                                                        <label>Adjective</label>
                                                        <input class="form-control" id="word23" type="text" placeholder="Adjective" required="required" data-validation-required-message="Please enter an adjective." onChange={e => setWord23(e.target.value)}/>
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

                    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-4">Baking a Birthday Cake</h2>
                      
                        { paragraph.length === 23 ? 
                        <h3>{paragraph[0]} a {paragraph[1]} cake is {paragraph[2]} once you know how it's done. First, you need the {paragraph[3]}, like {paragraph[4]}, {paragraph[5]}, {paragraph[6]}, and {paragraph[7]}. Then you {paragraph[8]} all of the ingredients together. Finally, you {paragraph[9]} the {paragraph[10]} batter into {paragraph[11]} pans and {paragraph[12]} them into a {paragraph[13]} {paragraph[14]} to bake. After {paragraph[15]} the cake, it's time to {paragraph[16]} the frosting. {paragraph[17]} food coloring to frosting to make a rainbow cake in colors like {paragraph[18]}, {paragraph[19]}, or {paragraph[20]}. Don't forget the {paragraph[21]} step: {paragraph[22]} the birthday cake!</h3> : null
                        }

        </div>
    )
}

export default Cake;




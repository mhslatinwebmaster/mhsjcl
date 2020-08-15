import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class Vocab extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.VOCAB);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Vocabulary — Miramonte Latin Club</title>
                    <meta name="description" content="Learn new Latin words!" />
                </Helmet>
                <br />
                <Container>
                    <h1>Vocabulary</h1>
                    <p>Similar to derivatives, Latin Vocabulary is a very straightforward topic. Of primary importance is knowing the meaning of Latin words; the two types of questions that comprise approximately 80% of all vocabulary questions are of the following format:</p>
                    <ul>
                        <li>Give the English meaning of the Latin word <i>frigus</i> (cold), or</li>
                        <li>Give a Latin word that means crime (<i>facinus</i>)</li>
                    </ul>
                    <p>Questions about the genders of nouns (what gender is <i>nauta</i>?) and the principle parts of verbs (what is the third principal part of <i>disco</i>?) come up too, but nowhere close to as frequently as definition questions.</p>
                    <p>The one source that alone has approximately 98% of Latin Vocabulary information tested is <i>Basic Latin Vocabulary</i> by Donald J. Brunel, Jr. A PDF of the book can be found <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6MWZhOGUwMDlhNTY4ZTY3NA" target="_blank" rel="noopener noreferrer">here</a> and a Quizlet set of the entire book can be found <a href="https://quizlet.com/join/r7U9QK3Sf" target="_blank" rel="noopener noreferrer">here</a> and <a href="https://quizlet.com/25146304/basic-latin-vocabulary-flash-cards/" target="_blank" rel="noopener noreferrer">here.</a> Learn as many words as you possibly can from the Quizlet set and <i>victoriam adipisceris.</i> Remember: learn the definitions of the Latin words first and then go back and learn genitives, principal parts, and genders.</p>
                    <p>Mr. Carpenter has also put together quizlet sets of the core 1000 words in Latin.  Check it out <a href="https://quizlet.com/class/3474312/" target="_blank" rel="noopener noreferrer">here.</a></p>
                    <p>Also Ben "Divus" Johnson has created a <a href="http://latintutorial.com/vocabulary" target="_blank" rel="noopener noreferrer">quiz</a> to test your core vocabulary, our own Spencer Pugh '17 has the highest score in the country, Ite Mats!</p>
                    <hr />
                    <p><a href="https://docs.google.com/document/d/1Mz20tw0pRDXci8PE-5TOA_Tv32NU6ZLNvD_9ji8gEMM/edit" target="_blank" rel="noopener noreferrer">Level I and Level II Study Guide</a> by Amanda Han '18 and Zahra Hasanain '18</p>
                </Container>
            </div>
        );
    }
}

export default Vocab;

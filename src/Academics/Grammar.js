import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class Grammar extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.GRAMMAR);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Grammar — Miramonte Latin Club</title>
                    <meta name="description" content="Learn about grammar." />
                </Helmet>
                <br />
                <Container>
                    <h1>Grammar</h1>
                    <p>Grammar is a very important subject for Certamen and Latin academics overall. Strive to fully understand all the grammar topics you have covered in class, and then go above and beyond. For example, if you're a Latin II, make sure you know your participles and infinitives but then study ahead of the curriculum and learn all the different uses of the Dative Case (possession, purpose, reference, etc.). Ask your teacher if you're unsure about which "above and beyond" topics to study.</p>
                    <p>The best strategy to learn more advanced topics is to look ahead in your textbook (if you use one). If a certain topic is confusing, you'll find helpful videos by either our own <a href="https://www.youtube.com/user/magisterdavis" target="_blank" rel="noopener noreferrer">Magister Davis/Carpenter</a> or by <a href="https://www.youtube.com/user/latintutorial" target="_blank" rel="noopener noreferrer">Latin Tutorial.</a></p>
                    <p>If you're ever unsure about anything, look it up in Allen and Greenough's <i><a href="http://rossviewlatin.weebly.com/uploads/1/2/7/8/12787698/allen_and_greenough_s_new_latin_grammar.pdf" target="_blank" rel="noopener noreferrer">New Latin Grammar.</a></i> This is the king of all grammar books, but don't try to read through it; it's much too comprehensive.</p>
                    <p>If you want to master Latin Grammar (for the most part), buy a copy of Henle's <i><a href="https://www.amazon.com/Latin-Grammar-Henle-Robert-J/dp/0829401121" target="_blank" rel="noopener noreferrer">Latin Grammar</a></i> and read through it. Don't pay much attention to the "notes," but strive to learn and understand all the topics discussed. Henle's is much less comprehensive than Allen and Greenough's, but it discusses 97%+ of the grammar tested on the JCL tests.</p>
                    <p>For all levels, make sure you know what case follows each preposition (e.g. accusative follows <i>trans</i>, ablative follows <i>ex</i>, etc.). A good list can be found <a href="http://www.informalmusic.com/latinsoc/prep.html" target="_blank" rel="noopener noreferrer">here.</a></p>
                </Container>
            </div>
        );
    }
}

export default Grammar;

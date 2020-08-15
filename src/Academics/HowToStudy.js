import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class HowToStudy extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.HOW_TO_STUDY);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>How to Study — Miramonte Latin Club</title>
                    <meta name="description" content="Learn how to study for Latin tests!" />
                </Helmet>
                <br />
                <Container>
                    <h1>How to Study</h1>
                    <p className="lead"><i>Labor omnia vincit;</i> if you put in the time, you'll achieve the desired results.</p>
                    <hr />
                    <p>Overall, it is important to not only <i>read</i> the sources. To be successful, you must remember all the facts. Therefore, take thorough notes while you read and then transforming those notes in one of two ways:</p>
                    <ol>
                        <li>Enter the information into Quizlet to test yourself. For example:
                        <ol>
                            <li>Q - Battle of Zama date and participants</li>
                            <li>202 B.C. Scipio Africanus defeats Hannibal</li>
                        </ol>
                        </li>
                        <li>Make yourself a reverse outline: Start with a two column table. On one side of the table, enter a question similar to the example above. On the other side of the table, enter the answer. You can cover up the answer side and highlight the questions that give you trouble.</li>
                    </ol>
                    <p>Especially for Certamen, it is important to be able to recall information (answers to questions) within a very short time frame (5 seconds). If you constantly test yourself on what you have read, you will be unstoppable.</p>
                    <p>Take care to be very thorough when you're reading through the sources; don't skip over or ignore the details. Especially, in the upper levels, it is often those seemingly insignificant details that separate the best from the masses.</p>
                    <p><a href="http://www.fjcl.org/regional-study-guides.html" target="_blank" rel="noopener noreferrer">Here</a> is a link to all the FJCL Study Guides. They are very helpful if you're a Latin I, if you're low on time, or if you just want an extra supplement.</p>
                    <p>Also, practice the tests from the National Convention. They can be accessed <a href="https://app.box.com/s/1r0mb0q40m6eodsj3fh25331ur7vob01" target="_blank" rel="noopener noreferrer">here.</a> Keep in mind that the Nationals tests are more difficult than the State tests. Nonetheless, questions from the past Nationals tests will indubitably reappear on the State tests.</p>
                </Container>
            </div>
        );
    }
}

export default HowToStudy;

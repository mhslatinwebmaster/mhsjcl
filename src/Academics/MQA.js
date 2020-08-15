import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class MQA extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.MQA);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Mottoes, Quotes, and Abbreviations — Miramonte Latin Club</title>
                    <meta name="description" content="Learn about mottoes, quotes, and abbreviations." />
                </Helmet>
                <br />
                <Container>
                    <h1>Mottoes, Quotes, and Abbreviations</h1>
                    <p>MQA is a relatively low competition test to take. A little studying will go a long way.</p>
                    <p>Mottoes include the following:</p>
                    <ul>
                        <li>State Mottoes (e.g. <i>Ditat Deus</i> - Arizona)
                        <ul>
                            <li type="circle">Only about 30 states have Latin mottoes. A Quizlet set can be found <a href="https://quizlet.com/29486820/state-mottoes-flash-cards/" target="_blank" rel="noopener noreferrer">here.</a></li>
                        </ul>
                        </li>
                        <li>Country Mottoes (e.g. <i>A mari usque ad mare</i> - Canada)
                        <ul>
                            <li type="circle">Learning country mottoes is much less important than learning state mottoes</li>
                        </ul>
                        </li>
                        <li>University Mottoes (e.g. <i>Vox clamantis in deserto</i> - Dartmouth College)
                        <ul>
                            <li type="circle">Just learn the ones listed in the study guide found <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6NTU3ZGY1Mzk5Yjk3Y2Q1ZA" target="_blank" rel="noopener noreferrer">here.</a></li>
                        </ul>
                        </li>
                        <li>Random Mottoes (e.g. <i>Semper Paratus</i> - Coast Guard, <i>Ars gratia artis</i> - MGM)</li>
                        <li>A helpful Quizlet set that contains many important mottoes can be found <a href="https://quizlet.com/38184345/mottoes-flash-cards/" target="_blank" rel="noopener noreferrer">here.</a></li>
                    </ul>
                    <p>The Quotes portion of the test will ask for the author of a certain quote from Latin Literature (e.g. <i>Alea iacta est</i> - Julius Caesar). A Quizlet set with the quotes that most frequently appear on the test can be found <a href="https://quizlet.com/39213828/quotes-flash-cards/" target="_blank" rel="noopener noreferrer">here.</a> Don't get overwhelmed; just star and learn ~20 terms at a time.</p>
                    <p>The Abbreviations portion of the test is the quickest to study for. Learn the abbreviations and their meanings forward and backwards. A Quizlet set with many of the most important abbreviations can be found <a href="https://quizlet.com/38183047/abbreviations-flash-cards/" target="_blank" rel="noopener noreferrer">here.</a> Check the backside of a medicine bottle and you'll likely see many of these abbreviations used in context.</p>
                    <hr />
                    <p><a href="https://docs.google.com/document/d/1-IVAl82msj2dnkfTFu2huVQP_GbluThxNKA-aTo9OSE/edit" target="_blank" rel="noopener noreferrer">Level 1 Study Guide</a> by Spencer Pugh '17</p>
                    <p><a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6MWFiOTA4NzY5YTFiMDYxZA" target="_blank" rel="noopener noreferrer">2018-2019 Study Guide</a> by Zahra Hasanain</p>
                </Container>
            </div>
        );
    }
}

export default MQA;

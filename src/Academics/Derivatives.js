import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class Derivatives extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.DERIVATIVES);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Derivatives — Miramonte Latin Club</title>
                    <meta name="description" content="Learn about derivatives." />
                </Helmet>
                <br />
                <Container>
                    <h1>Derivatives</h1>
                    <p>General advice and Level 3 sources:</p>
                    <p>This is one of the most straightforward topics to study. Each Certamen round will have approximately 2 derivative questions. The most important component of derivatives is learning the Latin words and their meanings from which English words are derived (e.g. derivative is from <i>rivus</i> (river)).</p>
                    <p>A complete list of all the necessary derivatives you'll ever need to know can be found <a href="https://rossviewlatin.weebly.com/uploads/1/2/7/8/12787698/mergedlatdict.doc" target="_blank" rel="noopener noreferrer">here</a> (Greenwald's <i>Latin Derivative Dictionary</i>).</p>
                    <p>However, you should check out the Quizlet sets found <a href="https://quizlet.com/shawnhon9/folders/derivatives/sets" target="_blank" rel="noopener noreferrer">here.</a> They are based on a combination of the the top 3 derivative sources and thus are extremely comprehensive. Star around 100-200 terms at a time; learn in little chunks. If you know the derivatives in those six sets (don't worry about the Greek ones), your competition will no longer be competition in any way, shape, or form.</p>
                    <p>If you're in a rush, you can use <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6NDk3ZDE5ZWYyMzQwZmE5Ng" target="_blank" rel="noopener noreferrer">this more-compact list.</a></p>
                    <p>If you plan on making your own flashcards to study, then follow this format:</p>
                    <p>Side 1: English word (ex. salubrious)</p>
                    <p>Side 2: Latin word from which the English word is derived + meaning of the Latin word (ex. <i>salus</i> (health)).</p>
                    <hr />
                    <p><a href="https://docs.google.com/document/d/1Mz20tw0pRDXci8PE-5TOA_Tv32NU6ZLNvD_9ji8gEMM/edit" target="_blank" rel="noopener noreferrer">Level I Study Guide</a> by Amanda Han '18 and Zahra Hasanain '18</p>
                    <p><a href="https://docs.google.com/document/d/1dvxww1Jpp8q282lo3ylVdb34ym2l83o0R-hIgg4WPXM/edit" target="_blank" rel="noopener noreferrer">Level II Study Guide</a> by Amanda Han '18 and Alan Tang '18</p>
                </Container>
            </div>
        );
    }
}

export default Derivatives;

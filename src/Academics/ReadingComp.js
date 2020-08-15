import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class ReadingComp extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.READING_COMP);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Reading Comprehension — Miramonte Latin Club</title>
                    <meta name="description" content="Improve your reading comprehension skills!" />
                </Helmet>
                <br />
                <Container>
                    <h1>Reading Comprehension</h1>
                    <p>Reading Comprehension is a difficult test to "study" for. The key is practice.</p>
                    <p>Make sure you're comfortable with all the grammar concepts and vocabulary you've learned. Grammar isn't as important, but it would be wise to learn/study additional <Link to="/academics/vocabulary">vocabulary.</Link></p>
                    <p>Practice, practice, practice. You can access all the past NLE's <a href="https://www.nle.org/Exams/Information#previousexam" target="_blank" rel="noopener noreferrer">here.</a> The passage questions on the second half of the test mirror very well the types of questions you will see. In addition, translations of the passages are provided on the answer keys to help if you're confused. Since the NLE passages are a little easier in difficulty than what you'll probably see on the state (or definitely the National test), attempt the passages on the tests above your Latin level after you feel comfortable with the passages at your Latin level (e.g. if you're a Latin II, try the Latin III passages if you have time).</p>
                    <p>You should also practice with the National Reading Comprehension tests found <a href="https://app.box.com/s/1r0mb0q40m6eodsj3fh25331ur7vob01" target="_blank" rel="noopener noreferrer">here.</a> These will be significantly more difficult than the state tests, so don't worry if you struggle with them. Just remember: the more you practice the easier it will get.</p>
                </Container>
            </div>
        );
    }
}

export default ReadingComp;

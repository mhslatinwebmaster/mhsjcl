import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class Pentathlon extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.PENTATHLON);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Pentathlon — Miramonte Latin Club</title>
                    <meta name="description" content="Prepare for the Pentathlon!" />
                </Helmet>
                <br />
                <Container>
                    <h1>Pentathlon</h1>
                    <p>The Pentathlon is equally comprised of five subjects: vocabulary, grammar, derivatives, mythology, and culture (Daily Life + Roman History). Thus, visit the pages for each of the topics and study as much as you can. If you're only going to study for one or two of the topics, you probably want to pick either mythology or derivatives. You'll already be able to answer some of the vocabulary and grammar questions no matter what level of Latin you are, so you can set yourself apart from the masses by doing well on the tougher sections.</p>
                </Container>
            </div>
        );
    }
}

export default Pentathlon;

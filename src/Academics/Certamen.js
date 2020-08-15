import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class Certamen extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.CERTAMEN);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Certamen — Miramonte Latin Club</title>
                    <meta name="description" content="Learn about Certamen." />
                </Helmet>
                <br />
                <Container>
                    <h1>Certamen</h1>
                    <p className="lead">Important Certamen links <a href="https://docs.google.com/document/d/1ecxMq0CrGgYSXD_5-a1vAGuO2MB0F7kTQ_0qoidbibQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>!</p>
                    <hr />
                    <p>Certamen means a struggle or competition. Academic tests are great but quite passive. Imagine a room with three teams, that is, twelve players, each individual armed with a single button, less than a centimeter of finger motion from answering a single question which, should he or she be correct, awards that team with exclusive points to the question. In short, a question is read, and if at any time a player is confident in an answer, even before the reader is finished, they may buzz in and respond. It's a race. It's stressful, it's intense, it's fun.</p>
                    <p>If you'd like to join the MHS Certamen team, email our Dux Certaminis Edrick Wang!</p>
                </Container>
            </div>
        );
    }
}

export default Certamen;

import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class WhatWeDo extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.WHAT_WE_DO);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>What We Do — Miramonte Latin Club</title>
                    <meta name="description" content="Learn about what the Miramonte Latin Club does." />
                </Helmet>
                <br />
                <Container>
                    <h1>What We Do</h1>
                    <p className="lead">Since (whenever the club was created), we have spread the JCLove.</p>
                    <hr />
                    <h3>Our Pledge:</h3>
                    <blockquote className="blockquote" style={{fontSize: "1rem"}}>
                        <p>Exegi monumentum aere perennius</p>
                        <p>regalique situ pyramidum altius,</p>
                        <p>quod non imber edax, non Aquilo impotens</p>
                        <p>possit diruere aut innumerabilis</p>
                        <p>annorum series et fuga temporum.</p>
                        <footer className="blockquote-footer" style={{fontSize: "1rem"}}>Horace</footer>
                    </blockquote>
                </Container>
            </div>
        );
    }
}

export default WhatWeDo;

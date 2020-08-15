import React, { Component } from "react";
import {
    Container,
    Jumbotron,
    Button,
    Row,
    Col } from "reactstrap";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import MobileCheck from "../MobileCheck";
import CheckScroll from "../CheckScroll";
import * as routes from "../Routes";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import "../css/academics.css";

class General extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.GENERAL);

        this.checkScroll = CheckScroll.bind(this);
        window.onscroll = this.checkScroll;
        window.onload = this.checkScroll;
        window.onresize = this.checkScroll;

        this.navbar = document.querySelectorAll(".navbar")[0];

        if (!MobileCheck()) {
            this.navbar.classList.remove("scrolled");
            this.navbar.classList.remove("navbar-dark");
            this.navbar.classList.add("navbar-light");
            this.navbar.classList.remove("bg-dark");
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>General — Miramonte Latin Club</title>
                    <meta name="description" content="Improve your academic skills!" />
                </Helmet>
                <Jumbotron id="academics-header" style={{overflow: "hidden"}}>
                    <br />
                    <Flip left>
                        <h1 className="text-center display-3" style={{color: "#eee"}}>Academics</h1>
                    </Flip>
                    <Fade up>
                        <p className="text-center lead" style={{color: "#eee"}}>Welcome to the academics area! Here you will find everything you need to be successful both with academic tests and Certamen.</p>
                    </Fade>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col sm="8" style={{display: "flex", alignItems: "center"}}>
                            <Slide left>
                                <p className="lead align-middle" style={{marginBottom: "0px"}}>First, you'll need access to the Miramonte Latin Academics Quizlet sets!</p>
                            </Slide>
                        </Col>
                        <Col sm="4">
                            <Fade>
                                <Button color="primary" href="https://quizlet.com/join/XSySP57xW" target="_blank" rel="noopener noreferrer">Join the Quizlet class</Button>
                            </Fade>
                        </Col>
                    </Row>
                    <hr />
                    <p>If you're attending Nationals and want advice on how to study for the tests there, contact <a href="mailto:garrett.louie19@auhsdschools.org">Garrett Louie</a> or <a href="mailto:shawnhon9@gmail.com">Shawn Honaryar.</a></p>
                    <Row>
                        <Col md="6">
                            <b>List of Tests Offered at the CAJCL State Convention:</b>
                            <Fade cascade>
                                <ol>
                                    <li><Link to={routes.MYTHOLOGY}>Mythology</Link></li>
                                    <li><Link to={routes.ROMAN_HISTORY}>Roman History</Link></li>
                                    <li><Link to={routes.ANCIENT_GEOGRAPHY}>Ancient Geography</Link></li>
                                    <li><Link to={routes.DERIVATIVES}>Latin Derivatives</Link></li>
                                    <li><Link to={routes.VOCAB}>Latin Vocabulary</Link></li>
                                    <li><Link to={routes.GRAMMAR}>Latin Grammar (1, 2, ADV)</Link></li>
                                    <li><Link to={routes.DAILY_LIFE}>Daily Life</Link></li>
                                    <li><Link to={routes.MQA}>Mottoes, Quotes, and Abbreviations</Link></li>
                                    <li><Link to={routes.READING_COMP}>* Reading Comprehension (1, 2, ADV)</Link></li>
                                    <li><Link to={routes.PENTATHLON}>* Pentathlon</Link></li>
                                    <li><Link to={routes.CLASSICAL_ART}>* Classical Art</Link></li>
                                </ol>
                            </Fade>
                        </Col>
                        <Col md="6">
                            <b>List of Major Certamen Topics:</b>
                            <Fade cascade>
                                <ol>
                                    <li><Link to={routes.ROMAN_HISTORY}>Roman History</Link></li>
                                    <li><Link to={routes.MYTHOLOGY}>Mythology</Link></li>
                                    <li><Link to={routes.DERIVATIVES}>Latin Derivatives</Link></li>
                                    <li><Link to={routes.VOCAB}>Latin Vocabulary</Link></li>
                                    <li><Link to={routes.GRAMMAR}>Latin Grammar</Link></li>
                                    <li><Link to={routes.LITERATURE}>Latin Literature</Link></li>
                                </ol>
                            </Fade>
                            <b>List of Minor Certamen Topics:</b>
                            <Fade cascade>
                                <ol>
                                    <li><Link to={routes.ANCIENT_GEOGRAPHY}>Ancient Geography</Link></li>
                                    <li><Link to={routes.DAILY_LIFE}>Daily Life</Link></li>
                                    <li><Link to={routes.MQA}>Mottoes, Quotes, and Abbreviations</Link></li>
                                </ol>
                            </Fade>
                        </Col>
                    </Row>
                    <p>* Only available during Testing Session 0</p>
                    <p>You can also take a look at <a href="https://www.nle.org/Exams/Information#previousexam" target="_blank" rel="noopener noreferrer">previous NLE exams!</a></p>
                    <hr />
                    <p>Huge thanks to Shawn Honaryar for creating the <a href="https://sites.google.com/site/miralatinacademics/" target="_blank" rel="noopener noreferrer">original MHS Latin Academics website!</a></p>
                </Container>
            </div>
        );
    }
}

export default General;

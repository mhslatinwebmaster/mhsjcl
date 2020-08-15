import React, { Component } from "react";
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Timeline } from "react-twitter-widgets";
import MobileCheck from "./MobileCheck";
import CheckScroll from "./CheckScroll";
import * as routes from "./Routes";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import "./css/home.css";

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);

        ReactGA.pageview(routes.HOME);
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
                    <title>Miramonte Latin Club</title>
                    <meta name="description" content="The official website for Miramonte Latin Club." />
                </Helmet>
                <Jumbotron id="welcome">
                    <div className="vertical-center-cover">
                        <div style={{overflow: "hidden", width: "100%"}}>
                            <Fade up>
                                <h2 className="text-center" id="welcome-message" style={{color: "white"}}>Welcome to the</h2>
                            </Fade>
                        </div>
                        <div style={{overflow: "hidden", width: "100%"}}>
                            <Fade down>
                                <h1 className="display-2 text-center" style={{fontFamily: "Trajan Pro", color: "white"}}>Miramonte Latin Club</h1>
                            </Fade>
                        </div>
                    </div>
                    <div className="arrow-container"><span className="scroll-arrow" /></div>
                </Jumbotron>
                <Jumbotron id="description" className="vertical-center">
                    <div className="home-info">
                        <Fade left>
                            <div>
                                <h3 style={{fontFamily: "Trajan Pro", fontWeight: "bold"}}>We are the Miramonte Latin Club.</h3>
                                <p className="lead">The Miramonte Latin Club strives to spread love of the classics to all of its members. Find us on Wednesdays at lunch in Magister Davis' room for cookies and fun meetings. Come to Certamen meetings on Tuesdays for the most intense sport you'll ever see.</p>
                            </div>
                        </Fade>
                    </div>
                </Jumbotron>
                <Jumbotron id="info" className="vertical-center">
                    <Row style={{width: "100%", padding: "0px", margin: "0px"}}>
                        <Col md="6" style={{width: "100%", padding: "5px 0 5px 0"}}>
                            <div className="home-info-column left">
                                <Fade left>
                                    <div>
                                        <h3 style={{fontFamily: "Trajan Pro", fontWeight: "bold"}}>What We Do</h3>
                                        <p className="lead">Learn about the Miramonte Latin Club and the JCL.</p>
                                        <Button outline color="success" tag={RRNavLink} to={routes.WHAT_WE_DO}>Learn More</Button>
                                    </div>
                                </Fade>
                            </div>
                        </Col>
                        <Col md="6" style={{justifyContent: "flex-end", width: "100%", padding: "5px 0 5px 0"}}>
                            <div className="home-info-column right">
                                <Fade right>
                                    <div className="text-right">
                                        <h3 style={{fontFamily: "Trajan Pro", fontWeight: "bold"}}>Who We Are</h3>
                                        <p className="lead">Take a look at our 2019-2020 officers.</p>
                                        <Button outline color="success" tag={RRNavLink} to={routes.OFFICERS}>Meet Us</Button>
                                    </div>
                                </Fade>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>
                <Jumbotron id="sign-up" className="vertical-center">
                    <div className="home-info">
                        <Fade left>
                            <div>
                                <h3 style={{fontFamily: "Trajan Pro", fontWeight: "bold"}}>Sign Up for Latin Club</h3>
                                <p className="lead">Be part of one of the largest and most dynamic clubs at Miramonte! You'll receive a Latin Club t-shirt, Latin club pencils, a movie night, a pasta feed, a donut party, a membership in the National Junior Classical League, and a membership in the California Junior Classical League.</p>
                                <Button outline color="primary" href="https://miramonte.revtrak.net/Clubs/Latin/#/v/Latin-Club-Dues-73" target="_blank" rel="noopener noreferrer">Sign Up</Button>
                            </div>
                        </Fade>
                    </div>
                </Jumbotron>
                <Container>
                    <br />
                    <Row>
                        <Col md="6">
                            <div style={{overflow: "hidden", width: "100%"}}>
                                <Slide left>
                                    <Timeline
                                        dataSource={{
                                            sourceType: "profile",
                                            screenName: "mhsjcl"
                                        }}
                                        options={{
                                            username: "mhsjcl",
                                            height: "600"
                                        }} />
                                </Slide>
                            </div>
                        </Col>
                        <Col md="6">
                            <div style={{overflow: "hidden", width: "100%"}}>
                                <Slide right>
                                    <Timeline
                                        dataSource={{
                                            sourceType: "profile",
                                            screenName: "CaliforniaJCL"
                                        }}
                                        options={{
                                            username: "CaliforniaJCL",
                                            height: "600"
                                        }} />
                                </Slide>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;

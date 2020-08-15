import React, { Component } from "react";
import {
    Container } from "reactstrap";
import Iframe from "../Iframe";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class Minutes extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.MINUTES);
    }

    render() {
        const minutes = '<iframe style="border-width: 0px; border-radius: 5px; box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);" src="https://docs.google.com/document/d/e/2PACX-1vSGxuH9OJozaFoKr0xLPRip2VRrx6BVFjGBLHAnlc1VPWWsbRUXH2pjmkR6gDgozbafeeGWoc9fVj5y/pub?embedded=true" width="100%" height="550px"></iframe>';

        return (
            <div>
                <Helmet>
                    <title>Minutes — Miramonte Latin Club</title>
                    <meta name="description" content="Club meeting minutes of the Miramonte Latin Club." />
                </Helmet>
                <br />
                <Container>
                    <h1>Minutes</h1><br />
                    <Iframe iframe={ minutes } />
                </Container>
            </div>
        );
    }
}

export default Minutes;

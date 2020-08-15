import React, { Component } from "react";
import { Container } from "reactstrap";
import Iframe from "../Iframe";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class Constitution extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.CONSTITUTION);
    }

    render() {
        const constitution = '<iframe style="border-width: 0px; border-radius: 5px; box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);" src="https://drive.google.com/file/d/1jynrjFtALaIXl3nsIh6AvPkpne3YozDq/preview" width="100%" height="550px"></iframe>';

        return (
            <div>
                <Helmet>
                    <title>Our Constitution — Miramonte Latin Club</title>
                    <meta name="description" content="The constitution of the Miramonte Latin Club." />
                </Helmet>
                <br />
                <Container>
                    <h1>Our Constitution</h1><br />
                    <Iframe iframe={ constitution } />
                </Container>
            </div>
        );
    }
}

export default Constitution;

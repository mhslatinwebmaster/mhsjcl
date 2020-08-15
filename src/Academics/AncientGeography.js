import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class AncientGeography extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.ANCIENT_GEOGRAPHY);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Ancient Geography — Miramonte Latin Club</title>
                    <meta name="description" content="Learn about ancient geography." />
                </Helmet>
                <br />
                <Container>
                    <h1>Ancient Geography</h1>
                    <p>Ancient Geography is one of the smaller and more obscure topics. Thus, it's a great test to take if you want to win since there will be less competition.</p>
                    <p>You will be tested on:</p>
                    <ol>
                        <li>The locations of cities, regions, bodies of water, islands, mountains, temples, et al.</li>
                        <li>Rome's internal geography (Campus Martius, Capitoline Hill, forum, etc.)</li>
                        <li>The ancient and present-day names of cities (Lutetia = Paris)</li>
                    </ol>
                    <p>The best way to study Geography is to use the map games that Magister Davis and Shawn Honaryar has created. Davis' can be found <a href="https://www.purposegames.com/profile/574858/games" target="_blank" rel="noopener noreferrer">here,</a> and Shawn's can be found <a href="http://www.purposegames.com/profile/217007/games" target="_blank" rel="noopener noreferrer">here.</a></p>
                    <p>You should begin, however, with learning all the terms on <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6Njc0ZWQ4NDZlZDYyNGIwZg" target="_blank" rel="noopener noreferrer">this study guide.</a></p>
                    <p>The test includes questions about the geography of the Mediterranean area and its surroundings. <i>>Italia et Graecia</i> are the focal points.</p>
                    <p>A Quizlet set with the ancient and present-day names can be found <a href="https://quizlet.com/45390379/ancient-geography-flash-cards/" target="_blank" rel="noopener noreferrer">here.</a></p>
                    <p>Although all of this may seem overwhelming, learning the locations of places with the map games is very quick and efficient.</p>
                </Container>
            </div>
        );
    }
}

export default AncientGeography;

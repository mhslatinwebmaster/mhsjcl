import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class ClassicalArt extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.CLASSICAL_ART);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Classical Art — Miramonte Latin Club</title>
                    <meta name="description" content="Learn about classical art." />
                </Helmet>
                <br />
                <Container>
                    <h1>Classical Art</h1>
                    <p>Classical Art is probably the least competitive test; it is very neglected. A little studying will indubitably go a long way.</p>
                    <p>Your studying should revolve around <a href="http://www.fjcl.org/uploads/4/3/4/0/4340783/classical_art_study_guide.pdf" target="_blank" rel="noopener noreferrer">this study guide.</a> If you learn it all, you're golden. Google anything your unsure about.</p>
                    <p>The study guide should cover pretty much everything you need to know to do well on a low competition test like this. However, if you're interested in learning more or if you're studying for the Nationals test, you should consult some books:</p>
                    <ul>
                        <li><a href="https://www.amazon.com/Art-Greece-Rome-Susan-Woodford/dp/0521540372" target="_blank" rel="noopener noreferrer"><i>The Art of Greece and Rome</i> by Susan Woodford</a> (ISBN 0521540372)</li>
                        <li><a href="https://www.amazon.com/Oxford-History-Classical-Art/dp/0192853376" target="_blank" rel="noopener noreferrer"><i>The Oxford History of Classical Art</i> by John Boardman</a> (ISBN 0192853376)</li>
                        <li>You can also borrow some art books from MD. Just ask him to show you some.</li>
                    </ul>
                    <p>The main areas of focus are:</p>
                    <ul>
                        <li>recognizing artwork names</li>
                        <li>knowing who made the art</li>
                        <li>knowing why it's historically relevant</li>
                        <li>knowing the style and description</li>
                        <li>knowing the current location or origin (sometimes)</li>
                    </ul>
                </Container>
            </div>
        );
    }
}

export default ClassicalArt;

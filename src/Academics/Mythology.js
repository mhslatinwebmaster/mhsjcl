import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class Mythology extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.MYTHOLOGY);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Mythology — Miramonte Latin Club</title>
                    <meta name="description" content="Learn about mythology." />
                </Helmet>
                <br />
                <Container>
                    <h1>Mythology</h1>
                    <p>Mythology is a very difficult subject, since many Latin students already possess a substantial amount of prior knowledge. It is also one of the largest Certamen subjects, accounting for about 20% of the questions.</p>
                    <p>Here are the best sources:</p>
                    <ul>
                        <li>If you are just beginning and don't possess much prior knowledge beyond that from Percy Jackson, start with <a href="https://www.amazon.com/Mythology-Timeless-Tales-Gods-Heroes/dp/0446574759" target="_blank" rel="noopener noreferrer"><i>Mythology</i> by Edith Hamilton</a> (ISBN 0446574759). You may have read parts of this in English I.</li>
                        <li>Next, move on to <a href="https://www.amazon.com/Meridian-Handbook-Classical-Mythology/dp/0452009278" target="_blank" rel="noopener noreferrer"><i>The Meridian Handbook of Classical Mythology</i> by Edward Tripp</a> (ISBN 0452009278). The handbook is significantly more detailed than Edith Hamilton's <i>Mythology.</i> The best technique when studying the handbook is to learn by topic rather than studying in alphabetical order (the way the book is structured). For example, read all about the Trojan War at one time, looking up and studying the people whose names you don't already know.</li>
                        <li>Finally, if you want to leave the competition in the dust, consult the most authoritative source: <a href="https://www.amazon.com/Library-Mythology-Oxford-Worlds-Classics/dp/0199536325" target="_blank" rel="noopener noreferrer"><i>The Library of Greek Mythology</i> by Apollodorus.</a></li>
                    </ul>
                    <p>A brief study guide can be found <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6Mzk2MzQxZTE3MTZhOWVjYw" target="_blank" rel="noopener noreferrer">here.</a></p>
                    <p>A more detailed study guide can be found <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6MjFkNThjZTkxNzlmYmRjNg" target="_blank" rel="noopener noreferrer">here.</a></p>
                    <p>You can also use <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6NWRkZTdjYTMzZmVmMDAwNQ" target="_blank" rel="noopener noreferrer">these questions</a> to test yourself. Don't be intimidated; they are very advanced and specific.</p>
                    <hr />
                    <p><a href="https://docs.google.com/document/d/1c1w04HCdtnwofZK-RtdqDRB4oTCyaKpgJWydHplcT4Y/edit" target="_blank" rel="noopener noreferrer">Level 2 Study Guide</a> by Kiana Hu '19</p>
                </Container>
            </div>
        );
    }
}

export default Mythology;

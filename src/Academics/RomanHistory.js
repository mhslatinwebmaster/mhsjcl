import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class RomanHistory extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.ROMAN_HISTORY);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Roman History — Miramonte Latin Club</title>
                    <meta name="description" content="Learn about Roman history." />
                </Helmet>
                <br />
                <Container>
                    <h1>Roman History</h1>
                    <p>History is one of the largest topics for study. It is filled to the brim with minutiae (battles, dates, generals, etc.), but try to avoid feeling overwhelmed. Just learn as much as you can.</p>
                    <p>CAJCL Roman History questions won't be very similar to your normal, history class test questions; you won't be asked why this happened or what caused it. Rather, CAJCL Roman History is fact driven. Strive to learn as many names of people (including their achievements) and battles as possible. Knowing the dates for the more significant battles is also key.</p>
                    <p>Roman History is divided into four parts: <a href="https://quizlet.com/45472567/founding-of-rome-flash-cards/" target="_blank" rel="noopener noreferrer">the founding of Rome</a> (beginning with Aeneas), <a href="https://quizlet.com/45193481/roman-monarchy-flash-cards/" target="_blank" rel="noopener noreferrer">the Roman monarchy</a> (beginning with Romulus), <a href="https://quizlet.com/45285219/roman-republic-flash-cards/" target="_blank" rel="noopener noreferrer">the Roman Republic,</a> and finally <a href="https://quizlet.com/45243330/roman-empire-flash-cards/" target="_blank" rel="noopener noreferrer">the Roman Empire</a> (arguably the most important).</p>
                    <p>The best way to learn Roman History is to <Link to="/academics/how-to-study">read, outline, and then test yourself.</Link> Here are the best sources:</p>
                    <ul>
                        <li>If you don't know much about Roman History beyond what you learned in 7th grade, start with <a href="https://www.amazon.com/Ancient-Rome-Introductory-Paul-Zoch/dp/0806132876" target="_blank" rel="noopener noreferrer"><i>Ancient Rome: An Introductory History</i> by Paul A. Zoch</a> (ISBN 0806132876). It's very quick and easy to read.</li>
                        <li>Next, go with <a href="https://www.amazon.com/History-Roman-People-Allen-Ward/dp/0205846793" target="_blank" rel="noopener noreferrer"><i>A History of the Roman People</i> by Heichelheim, Yeo, and Ward</a> (ISBN 0205846793). It's more advanced, but contains more of the necessary information.</li>
                        <li>Finally, for the most authoritative source, read <a href="https://www.amazon.com/History-Rome-Down-Reign-Constantine/dp/0312383959" target="_blank" rel="noopener noreferrer"><i>A History of Rome</i> by Cary and Scullard</a> (ISBN 0312383959). This source alone contains almost all the information you'll ever be tested on with CAJCL and NJCL Roman History. It ends with Constantine, however, so make sure you still pull information about the emperors following Constantine from <i>A History of the Roman People.</i></li>
                    </ul>
                    <p>No matter which source you're reading, you should use in conjunction the outlines that can be downloaded <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6MTEwZDNiMmM4NDczYzRiMg" target="_blank" rel="noopener noreferrer">here</a> and <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6NDgwZTNlOTBiNTcyNGI4Mg" target="_blank" rel="noopener noreferrer">here</a> (by Ketan Ramakrishnan). The outlines combine information from multiple sources (including Cary/Scullard and Heichelheim/Yeo/Ward) and thus are a priceless resource. The Quizlet sets linked above are based on the Ramakrishnan outlines.</p>
                    <p>A brief study guide for the Monarchy and Republic can be found <a href="http://www.fjcl.org/uploads/4/3/4/0/4340783/republic_study_guide.pdf" target="_blank" rel="noopener noreferrer">here.</a></p>
                    <p>A brief study guide for the Empire can be found <a href="http://www.fjcl.org/uploads/4/3/4/0/4340783/empire_study_guide.pdf" target="_blank" rel="noopener noreferrer">here.</a></p>
                    <hr />
                    <p><a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6NTQ1MWUyNDQ2ZjAzZWQ4" target="_blank" rel="noopener noreferrer">Roman History Study Guide for Ludi, Level 1</a></p>
                    <p><a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6NmUzNWIxYTc4MWQ1MjY0OA" target="_blank" rel="noopener noreferrer">Roman History Study Guide for Ludi, Level 2</a></p>
                </Container>
            </div>
        );
    }
}

export default RomanHistory;

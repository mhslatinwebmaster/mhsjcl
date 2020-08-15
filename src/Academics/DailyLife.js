import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class DailyLife extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.DAILY_LIFE);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Daily Life — Miramonte Latin Club</title>
                    <meta name="description" content="Learn about Roman daily life." />
                </Helmet>
                <br />
                <Container>
                    <h1>Daily Life</h1>
                    <p>Daily Life is fairly straightforward to study. The test and Certamen questions are all term based.</p>
                    <p>The only source you should read is <a href="http://www.forumromanum.org/life/johnston_1.html" target="_blank" rel="noopener noreferrer">Private Life of the Romans</a>. It's a fairly quick read and it covers 90% of the information you will be tested on. You should read through this very thoroughly and take note of all Latin terms mentioned.</p>
                    <p>A reverse outline with all the terms you should know from <i>Private Life</i> can be found <a href="https://docs.google.com/document/d/1uECeTpSJAlLFQ0Z4D_v-9bDpo4L1oIOByc46vhX-L88/edit" target="_blank" rel="noopener noreferrer">here</a>. If you learn all the terms in that doc, your competition will no longer be competition; you'll be unstoppable.</p>
                    <p>However, <i>Private Life</i> doesn't contain information about the Roman military or the Roman holidays. A doc with all the extra information that isn't discussed in <i>Private Life</i> can be found <a href="https://docs.google.com/document/d/111rbjo0DhPYAwRLmItI-T9JdOr3dVdA1WrYIK_P7ThI/edit" target="_blank" rel="noopener noreferrer">here.</a></p>
                    <p>If you're in a rush (or if you're a Latin I), just strive to learn all the terms on <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6NzNhOWIzNDRkNzRiOWYxNQ" target="_blank" rel="noopener noreferrer">this study guide.</a></p>
                    <hr />
                    <p><a href="https://docs.google.com/document/d/1vQ2OQLPsgHSeAiIqs3pUleRTQeFG-VziqlY1ERYM2Ao/edit" target="_blank" rel="noopener noreferrer">Ludi Daily Life Study Guide</a> by Shawn Honaryar '16 and Winston Durand '17</p>
                </Container>
            </div>
        );
    }
}

export default DailyLife;

import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class Literature extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.LITERATURE);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Literature — Miramonte Latin Club</title>
                    <meta name="description" content="Learn about Roman literature." />
                </Helmet>
                <br />
                <Container>
                    <h1>Literature</h1>
                    <p>There are no academic literature tests at the CAJCL State Conventions. However, questions about literature come up very frequently in HS-3 and HS-ADV certamen.</p>
                    <p>The best book that is basically the bible of Latin literature is <a href="https://www.amazon.com/Latin-Literature-Gian-Biagio-Conte/dp/0801862531" target="_blank" rel="noopener noreferrer"><i>Latin Literature: A History</i> by Gian Biagio Conte</a> (ISBN 0801862531). However, that book is HUGE! So if you feel intimidated, use <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6NjNkMzI3NTZjZjA5OGM4Ng" target="_blank" rel="noopener noreferrer">Ramakrishnan's outline.</a></p>
                    <p>Overall, you probably should just use the outline. It is extremely comprehensive and will cover pretty much all the information you'll ever be asked about. Here is how you should study:</p>
                    <ol>
                        <li>Learn who the authors are of all the major works (e.g. <i>De Rerum Natura</i> - Lucretius)</li>
                        <li>Learn the backgrounds of all the major* authors (e.g. Cicero was born 106 B.C. in Arpinum). Birth locations are important!</li>
                        <li>Learn the firsts (e.g. Ennius was the first to divide his works into books)</li>
                        <li>Learn the basic plot of all the major works (e.g. In Plautus' <i>Aulularia</i> the old miser Euclio has hidden a pot of gold, which is stolen and used to pay for a young man, Lyconides, to marry the woman he raped, Euclio’s daughter, Phaedria)</li>
                        <li>Then strive to learn as much more as you possibly can. Basically, learn everything mentioned in the outline (this includes the number of books each work is divided into).</li>
                    </ol>
                    <p>Once again, if you're in a rush or want a brief synopsis, a concise study guide can be found <a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6NDdlOTA5MTg2YzBhMGM2ZA" target="_blank" rel="noopener noreferrer">here.</a></p>
                    <p>*Major authors include Plautus, Terence, Catullus, Lucretius, Cicero, Caesar, Vergil, Horace, Ovid, Livy, Seneca, Juvenal, Martial, Tacitus, Sallust.</p>
                </Container>
            </div>
        );
    }
}

export default Literature;

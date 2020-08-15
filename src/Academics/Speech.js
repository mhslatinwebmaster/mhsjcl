import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";

class Speech extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.SPEECH);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Speech Events — Miramonte Latin Club</title>
                    <meta name="description" content="Prepare for Latin speech events!" />
                </Helmet>
                <br />
                <Container>
                    <h1>Speech Events</h1>
                    <p><a href="https://www.youtube.com/channel/UCdbiQsTtzTCVhmqN91NcS5A/videos?shelf_id=0&view=0&sort=dd" target="_blank" rel="noopener noreferrer">Listen to Shawn Honaryar correctly pronounce the 2016 Dramatic Interpretation and Latin Oratory passages!</a></p>
                    <h2 className="text-center">Dramatic Interpretation</h2>
                    <p>Tips for Dramatic Interpretation:</p>
                    <ul>
                        <li>Act out the passage as you recite it (yes, you might feel slightly embarrassed while doing this, but, trust me, it's the way to win!)
                        <ul>
                            <li type="circle">Be funny! Judges love a competitor who breaks the monotony of performance after performance of the same passage with some humor.</li>
                        </ul>
                        </li>
                        <li>Use <a href="https://docs.google.com/document/d/1KIhV0X2ZOr5lF_WTwgt1P90WeZYx5cLHbUgFkBraFoI/edit" target="_blank" rel="noopener noreferrer">correct pronunciation</a></li>
                        <li>Inflect your voice according to the emotions in the passage</li>
                        <li>Feel free to use different voices for different characters speaking in your passage</li>
                        <li>Practice in front of a mirror. This is very important.</li>
                    </ul>
                    <h2 className="text-center">Latin Oratory</h2>
                    <p>Tips for Latin Oratory:</p>
                    <ul>
                        <li>Overall, the Latin Oratory passages tend to be more serious than the Dramatic Interpretation passages. So don't act everything out.</li>
                        <li>Use <a href="https://docs.google.com/document/d/1KIhV0X2ZOr5lF_WTwgt1P90WeZYx5cLHbUgFkBraFoI/edit" target="_blank" rel="noopener noreferrer">correct pronunciation</a></li>
                        <li>Focus on emphasizing the important words and inflect your voice according to the emotions in the passage. This is what separates a decent Latin Oratory from a <i>winning</i> Latin Oratory.</li>
                        <li>Use appropriate hand gestures as you speak. Don't just repeat the same ones over and over; watch yourself in the mirror as you practice the oratory and try to be natural.</li>
                    </ul>
                    <hr />
                    <p><a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6NjJjODM3MmM4MTk0N2NkMg" target="_blank" rel="noopener noreferrer">2018 NJCL Dramatic Interpretation Passages</a></p>
                    <p><a href="https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxtaXJhbGF0aW5hY2FkZW1pY3N8Z3g6NGFhMmRkMzViOTU0NTc0Yg" target="_blank" rel="noopener noreferrer">2018 NJCL Latin Oratory Passages</a></p>
                </Container>
            </div>
        );
    }
}

export default Speech;

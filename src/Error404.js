import React, { Component } from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";

class Error404 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>404 — Miramonte Latin Club</title>
                </Helmet>
                <br />
                <Container>
                    <h1 className="display-1">ERROR 404</h1>
                    <p className="lead">Mea culpa, pāgina non inventus est.</p>
                </Container>
            </div>
        );
    }
}

export default Error404;

import React, { Component } from "react";
import { Container } from "reactstrap";
import Iframe from "./Iframe";
import { Helmet } from "react-helmet";
import * as routes from "./Routes";
import ReactGA from "react-ga";

class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.CONTACT);
    }

    render() {
        const map = '<iframe title="Location of Miramonte High School" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.797243650922!2d-122.14665338468039!3d37.84163227974734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f88396c392405%3A0x19395863a24f3f71!2s750+Moraga+Way%2C+Orinda%2C+CA+94563!5e0!3m2!1sen!2sus!4v1534369348440" max-width="100%" max-height="100%" frameborder="0" allowfullscreen></iframe>';
        const contact = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdB2hrcCZal5Z2YKmm6Hfu_4-tJ95dAQqwU0WJoOpLTARgdkA/viewform?embedded=true" width="640" height="896" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>';

        return (
            <div>
                <Helmet>
                    <title>Contact Us — Miramonte Latin</title>
                    <meta name="description" content="Contact the Miramonte Latin Club." />
                </Helmet>
                <br />
                <Container>
                    <h1>Contact Us</h1>
                    <h2>Miramonte High School</h2>
                    <p>
                        <b>Address:</b> <a href="https://www.google.com/maps/place/750+Moraga+Way,+Orinda,+CA+94563/">750 Moraga Way, Orinda, CA 94563</a><br />
                        <b>Phone Number:</b> (925) 280-3930<br />
                        <b>Sponsor:</b> Magister Davis, <a href="mailto:mdavis@auhsdschools.org">mdavis@auhsdschools.org</a><br />
                        <b>Club President:</b> Athena Davis, <a href="mailto:athena.davis20@auhsdschools.org">athena.davis20@auhsdschools.org</a><br />
                        <b>Website Inquiries:</b> Owen Pan, <a href="mailto:mhslatinwebmaster@gmail.com">mhslatinwebmaster@gmail.com</a> or <a href="mailto:owen.pan20@auhsdschools.org">owen.pan20@auhsdschools.org</a><br />
                    </p>
                    <Iframe iframe={ map } />
                    <br />
                    <Iframe iframe={ contact } />
                </Container>
            </div>
        );
    }
}

export default Contact;

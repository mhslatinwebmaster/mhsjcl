import React, { Component } from "react";
import {
    Container,
    ListGroup,
    ListGroupItem } from "reactstrap";
import Officer from "./Officer";
import { Helmet } from "react-helmet";
import * as routes from "../Routes";
import ReactGA from "react-ga";
import "react-web-tabs/dist/react-web-tabs.css";

class Officers extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.OFFICERS);
    }

    render() {
        var club = (
        <ListGroup flush>
            <ListGroupItem>
                <Officer
                    name="Athena Davis (12)"
                    position="Caesar (President)"
                    email="athena.davis20@auhsdschools.org"
                    bio={
                        <ul>
                            <li>Writes and posts meeting agendas in the club drive and leads the weekly lunch meetings of the MJCL</li>
                            <li>Organizes and communicates all activities and events with MJCL members through Facebook and GroupMe</li>
                            <li>Presides over all MJCL officers and helps other officers fulfill their duties</li>
                            <li>Prepare MJCL’s entry for the NJCL Activities Contest by keeping an activity log</li>
                            <li>Maintain and update the club Google Drive</li>
                            <li>Presides over MJCL elections and creates Voter Info Guide containing info on all candidates</li>
                            <li>Keeps record of all financial records for the club, plans a budget, and keeps the members aware of the current balance</li>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    name="Xander Deanhardt (11)"
                    position="Secundus Caesar (Vice President)"
                    email="william.deanhardt21@auhsdschools.org"
                    bio={
                        <ul>
                            <li>Acts as Caesar in Caesar’s absence at the weekly lunch meetings</li>
                            <li>In charge of MJCL publicity and makes sure that MJCL participates in CAJCL and NJCL publicity contests</li>
                            <li>In charge of recruiting students to MJCL and retaining membership (i.e. encouraging attendance of MJCL events and meetings)</li>
                            <li>Assists Caesar and Secretary in maintaining the club’s Google Drive folder</li>
                            <li>Helps other officers fulfill their duties to the MJCL</li>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    name="Olivia Eukel (11)"
                    position="Tertius Caesar (Vice Vice President)"
                    email="olivia.eukel21@auhsdschools.org"
                    bio={
                        <ul>
                            <li>Organizes weekly snacks for Latin Club meetings</li>
                            <li>In charge of organizing a quarterly community service project
                                <ul>
                                    <li>Submits project to NJCL Community Service Contest</li>
                                </ul>
                            </li>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    name="Isabelle Krochmal (12)"
                    position="Secretary"
                    email="isabelle.krochmal20@auhsdschools.org"
                    bio={
                        <ul>
                            <li>Takes minutes at weekly meetings and helps plan the agenda with the Caesar</li>
                            <li>Keeps an accurate list of the attendance for each MJCL meeting and activity</li>
                            <li>Sends the minutes to all officers after every meeting and uploads them to the Google Drive</li>
                            <li>Creates officer roster with contact information at the beginning of the year</li>
                            <li>Submits minutes to Leadership every month</li>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    name="James Donn (11)"
                    position="Ille Honda (That Honda)"
                    email="james.donn21@auhsdschools.org"
                    bio={
                        <ul>
                            <li>In charge of the chariot and the catapult for the CAJCL State Convention</li>
                            <li>Able to take on additional duties as capable and needed, determined on an individual basis</li>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    multiple={true}
                    names={["Freddie Bell", "Billy Beltran", "Matthew O'Brien", "Oscar Hodder"]}
                    name="Freddie Bell (12), Billy Beltran (12), Matthew O'Brien (12), Oscar Hodder (12)"
                    position="Spirit Leaders"
                    emails={["freddie.bell20@auhsdschools.org", "billy.beltran20@auhsdschools.org", "matthew.obrien20@auhsdschools.org", "oscar.hooder20@auhsdschools.org"]}
                    bio={
                        <ul>
                            <li>Organizes and leads the MJCL in spirit at the annual CAJCL Convention</li>
                            <li>Teaches spirit cheers to all MJCL members</li>
                            <li>Responsible for ordering any necessary materials/costumes for Spirit in advance</li>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    name="Cara Holden (11)"
                    position="Master of Communications"
                    email="cara.holden21@auhsdschools.org"
                    bio={
                        <ul>
                            <li>Maintains MJCL presence on social media specified by NJCL social media contest and follows the guidelines as closely as possible to compete successfully in this NJCL contest</li>
                            <li>Edits and updates the MJCL Twitter feed, Facebook, Instagram, and Snapchat</li>
                            <ul>Helps historian(s) record all MJCL events</ul>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    name="Edrick Wang (11)"
                    position="Dux Certaminis (Certamen Coordinator)"
                    email="edrick.wang21@auhsdschools.org"
                    bio={
                        <ul>
                            <li>Coordinates MJCL’s Certamen teams</li>
                            <li>Organizes and runs weekly Certamen meetings
                                <ul>
                                    <li>Reads questions and conduct certamen practice in a polite and constructive manner if the MJCL advisor cannot attend</li>
                                </ul>
                            </li>
                            <li>Helps MJCL plan for certamen at Ludi, Carcer, and for the annual CAJCL and NJCL Conventions</li>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    multiple={true}
                    names={["Seamus McCarthy", "Grace Sjöberg"]}
                    name="Seamus McCarthy (12), Grace Sjöberg (11)"
                    position="Consules Optimissimi (Academics Officers)"
                    emails={["seamus.mccarthy20@auhsdschools.org", "grace.sjoberg21@auhsdschools.org"]}
                    bio={
                        <ul>
                            <li>Organizes prep sessions for the Academic Cohort for convention</li>
                            <li>Organizes outside tests (NLVE, NCEE, etc.)</li>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    multiple={true}
                    names={["Scarlett Mosher", "Reese Whipple", "Mia Singleton", "Ruby McCabe"]}
                    name="Scarlett Mosher (11), Reese Whipple (11), Mia Singleton (11), and Ruby McCabe (10)"
                    position="Historians"
                    emails={["scarlett.mosher21@auhsdschools.org", "reese.whipple21@auhsdschools.org", "mia.singleton21@auhsdschools.org", "ruby.mccabe22@auhsdschools.org"]}
                    bio={
                        <ul>
                            <li>Coordinates the preparation of a scrapbook for the annual CAJCL Convention and Latin Banquet and keeps a historical documentation of all MJCL activities and officers</li>
                            <li>Takes pictures or delegates others to take pictures of ALL MJCL events and uploads pictures to the Latin club Google Drive folder</li>
                            <li>Prepares entries for NJCL Club of the Month Contest</li>
                            <li>Maintains and displays awards and trophies from MJCL events</li>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    multiple={true}
                    names={["Nejla Ackdoe-Pagey", "Ally Petek", "Chaya Tong", "Sophia Govea"]}
                    name="Nejla Ackdoe-Pagey (11), Ally Petek (11), Chaya Tong (11), and Sophia Govea (11)"
                    emails={["nejla.ackdoe-pagey21@auhsdschools.org", "allison.petek21@auhsdschools.org", "chaya.tong21@auhsdschools.org", "sophia.govea21@auhsdschools.org"]}
                    position="Consul Editors"
                    bio={
                        <ul>
                            <li>Organizes and distributes the MJCL Newsletter throughout the year
                                <ul>
                                    <li>The newsletter must follow as closely as possible the guidelines put out by NJCL so that it can successfully compete with the NJCL local publication contest</li>
                                    <li>Makes sure the newsletter appropriately promotes MJCL events and contains professional but still interesting writing</li>
                                </ul>
                            </li>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    name="Arhan Misra (10)"
                    position="Treasurer"
                    email="arhan.misra22@auhsdschools.org"
                    bio={
                        <ul>
                            <li>Manages funds for MJCL</li>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    name="Nomi Solwren (11)"
                    position="Auxilium"
                    email="naomi.solwren21@auhsdschools.org"
                    bio={
                        <ul>
                            <li>Helps other officers fulfill their duties</li>
                        </ul>
                    }
                />
            </ListGroupItem>
            <ListGroupItem>
                <Officer
                    name="Owen Pan (12)"
                    position="Webmaster"
                    email="owen.pan20@auhsdschools.org"
                    bio={
                        <ul>
                            <li>Maintains the MJCL website</li>
                            <li>Follows guidelines of NJCL website contest as closely as possible and submits website to NJCL Website Contest</li>
                        </ul>
                    }
                />
            </ListGroupItem>
        </ListGroup>
    );

    return (
        <div>
            <Helmet>
                <title>Officers — Miramonte Latin Club</title>
                <meta name="description" content="Officers of the Miramonte Latin Club." />
            </Helmet>
            <br />
            <Container>
                <h1>Officers</h1>
                { club }
            </Container>
        </div>
    );
    }
}

export default Officers;

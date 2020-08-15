import React, { Component } from "react";
import { Modal } from "reactstrap";
import {
    Route,
    HashRouter,
    Switch } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import Slide from "react-reveal/Slide";
import Konami from "react-konami-code";

import Navigation from "./Navigation";
import Home from "./Home";

import WhatWeDo from "./About/WhatWeDo";
import Officers from "./About/Officers";
import Constitution from "./About/Constitution";
import Minutes from "./About/Minutes";

import Consul from "./Consul";
import Pictures from "./Pictures";

import General from "./Academics/General";
import HowToStudy from "./Academics/HowToStudy";
import Certamen from "./Academics/Certamen";
import AncientGeography from "./Academics/AncientGeography";
import ClassicalArt from "./Academics/ClassicalArt";
import DailyLife from "./Academics/DailyLife";
import Derivatives from "./Academics/Derivatives";
import Grammar from "./Academics/Grammar";
import Literature from "./Academics/Literature";
import MQA from "./Academics/MQA";
import Mythology from "./Academics/Mythology";
import Pentathlon from "./Academics/Pentathlon";
import ReadingComp from "./Academics/ReadingComp";
import RomanHistory from "./Academics/RomanHistory";
import Speech from "./Academics/Speech";
import Vocab from "./Academics/Vocab";

import Contact from "./Contact";

import Error404 from "./Error404";
import * as routes from "./Routes";

import dance from "./files/images/dance.gif";
import "./css/main.css";

class Main extends Component {
    constructor(props) {
        super(props);

        this.easterEgg = this.easterEgg.bind(this);
        this.state = {
            konami: false,
            user: null
        };
    }

    easterEgg() {
        this.setState({
            konami: !this.state.konami
        });

        document.querySelectorAll("body *").forEach(function(elem) {
            var rand = Math.floor((Math.random() * 4));
            switch (rand) {
                case 0:
                    elem.style.fontFamily = "Comic Neue";
                    break;
                case 1:
                    elem.style.fontFamily = "Wingdings";
                    break;
                case 2:
                    elem.style.fontFamily = "Constantine";
                    break;
                case 3:
                    elem.style.fontFamily = "Papyrus";
                    break;
                default:
                    break;
            }
        });
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Navigation />

                    <Konami action={this.easterEgg} timeout={100} />
                    <Modal className="easter-egg" isOpen={this.state.konami} toggle={() => this.setState({konami: !this.state.konami})} centered={true}>
                        <img src={dance} alt={"a dance"} />
                    </Modal>
                    <div className="home">
                        {/* if the user navigates to a page with a transparent navbar, this Switch will override the next Switch */}
                        <Switch>
                            <Route exact path={routes.HOME} component={Home} />
                            <Route path={routes.CONSUL} component={Consul} />
                            <Route exact path={routes.GENERAL} component={General} />
                        </Switch>
                    </div>
                    <div className="content" style={{paddingTop: "50px"}}>
                        <Switch>
                            <Route exact path={routes.HOME} />

                            <Route path={routes.WHAT_WE_DO} component={WhatWeDo} />
                            <Route path={routes.OFFICERS} component={Officers} />
                            <Route path={routes.CONSTITUTION} component={Constitution} />
                            <Route path={routes.MINUTES} component={Minutes} />

                            <Route path={routes.CONSUL} />
                            <Route path={routes.PICTURES} component={Pictures} />

                            <Route exact path={routes.GENERAL} />
                            <Route path={routes.HOW_TO_STUDY} component={HowToStudy} />
                            <Route path={routes.CERTAMEN} component={Certamen} />
                            <Route path={routes.ANCIENT_GEOGRAPHY} component={AncientGeography} />
                            <Route path={routes.CLASSICAL_ART} component={ClassicalArt} />
                            <Route path={routes.DAILY_LIFE} component={DailyLife} />
                            <Route path={routes.DERIVATIVES} component={Derivatives} />
                            <Route path={routes.GRAMMAR} component={Grammar} />
                            <Route path={routes.LITERATURE} component={Literature} />
                            <Route path={routes.MQA} component={MQA} />
                            <Route path={routes.MYTHOLOGY} component={Mythology} />
                            <Route path={routes.PENTATHLON} component={Pentathlon} />
                            <Route path={routes.READING_COMP} component={ReadingComp} />
                            <Route path={routes.ROMAN_HISTORY} component={RomanHistory} />
                            <Route path={routes.SPEECH} component={Speech} />
                            <Route path={routes.VOCAB} component={Vocab} />

                            <Route path={routes.CONTACT} component={Contact} />
                            <Route component={Error404} />
                        </Switch>
                    </div>

                    <hr />
                    <div className="text-center" style={{overflow: "hidden"}}>
                        <Slide up cascade>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><SocialIcon url="https://www.facebook.com/mhsjcl/" /></li>
                                <li className="list-inline-item"><SocialIcon url="https://twitter.com/mhsjcl" /></li>
                                <li className="list-inline-item"><SocialIcon url="https://www.instagram.com/mhsjclig/" /></li>
                                <li className="list-inline-item"><SocialIcon url="https://www.snapchat.com/add/mhsjcl" /></li>
                                <li className="list-inline-item"><SocialIcon url="https://www.pinterest.com/miramontelatin/" /></li>
                                <li className="list-inline-item"><SocialIcon url="mailto:mhslatinwebmaster@gmail.com" /></li>
                                <li className="list-inline-item"><SocialIcon url="https://njcl.org/" /></li>
                            </ul>
                        </Slide>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;

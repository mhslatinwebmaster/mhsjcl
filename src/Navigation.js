import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from "reactstrap";
import {
    NavLink as RRNavLink,
    withRouter } from "react-router-dom";
import MobileCheck from "./MobileCheck";
import * as routes from "./Routes";
import "./css/navigation.css";

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.listen = this.listen.bind(this);
        this.aboutToggle = this.aboutToggle.bind(this);
        this.academicsToggle = this.academicsToggle.bind(this);
        this.updateNav = this.updateNav.bind(this);
        this.state = {
            mobile: !MobileCheck(),
            isOpen: false,
            aboutIsOpen: false,
            academicsIsOpen: false
        };

        this.aboutToggleProps = {};
        this.academicsToggleProps = {};
        this.aboutOnClickProps = {};
        this.academicsOnClickProps = {};
    }

    componentWillMount() {
        this.unlisten = this.props.history.listen(this.listen);
        this.updateNav();
        this.setState({
            mobile: MobileCheck()
        });
        window.addEventListener("resize", this.updateNav);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    listen(location, action) {
        this.setState({
            isOpen: false
        });

        if (!MobileCheck()) {
            var change = true;

            for (var i = 0; i < routes.TRANSPARENT.length; i++) {
                if (location.pathname === routes.TRANSPARENT[i] || location.pathname === "/#" + routes.TRANSPARENT[i]) {
                    change = false;
                    break;
                }
            }

            if (change) {
                window.onscroll = function() {};
                window.onload = function() {};
                window.onresize = function() {};
                var navbar = document.querySelectorAll(".navbar")[0];
                navbar.classList.remove("scrolled");
                navbar.classList.remove("navbar-light");
                navbar.classList.add("navbar-dark");
                navbar.classList.add("bg-dark");
            }
        }
    }

    aboutToggle() {
        this.setState({
            aboutIsOpen: !this.state.aboutIsOpen
        });
    }

    academicsToggle() {
        this.setState({
            academicsIsOpen: !this.state.academicsIsOpen
        });
    }

    updateNav() {
        if (MobileCheck()) {
            if (!this.state.mobile) {
                this.setState({
                    mobile: true,
                    aboutIsOpen: false,
                    academicsIsOpen: false
                });

                this.aboutOnClickProps.onClick = this.aboutToggle;
                this.academicsOnClickProps.onClick = this.academicsToggle;
                this.aboutToggleProps.toggle = null;
                this.academicsToggleProps.toggle = null;
            }
        } else {
            if (this.state.mobile) {
                this.setState({
                    mobile: false,
                    aboutIsOpen: false,
                    academicsIsOpen: false
                });

                this.aboutOnClickProps.onClick = null;
                this.academicsOnClickProps.onClick = null;
                this.aboutToggleProps.toggle = this.aboutToggle;
                this.academicsToggleProps.toggle = this.academicsToggle;
            }
        }
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md" fixed="top">
                    <NavbarBrand tag={RRNavLink} exact to="/" style={{color: "white"}}>Miramonte Latin Club</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to={routes.HOME}>Home</NavLink>
                            </NavItem>
                            <Dropdown isOpen={this.state.aboutIsOpen} {...this.aboutToggleProps} nav inNavbar>
                                <DropdownToggle {...this.aboutOnClickProps} nav caret>
                                    About
                                </DropdownToggle>
                                <DropdownMenu className="bg-dark" right>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.WHAT_WE_DO}>What We Do</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.OFFICERS}>Officers</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.CONSTITUTION}>Our Constitution</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.MINUTES}>Minutes</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <NavLink tag={RRNavLink} to={routes.CONSUL}>Consul</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} to={routes.PICTURES}>Pictures</NavLink>
                            </NavItem>
                            <Dropdown isOpen={this.state.academicsIsOpen} {...this.academicsToggleProps} nav inNavbar>
                                <DropdownToggle {...this.academicsOnClickProps} nav caret>
                                    Academics
                                </DropdownToggle>
                                <DropdownMenu className="bg-dark" right>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} exact to={routes.GENERAL}>General</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.HOW_TO_STUDY}>How to Study</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.CERTAMEN}>Certamen</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.ANCIENT_GEOGRAPHY}>Ancient Geography</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.CLASSICAL_ART}>Classical Art</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.DAILY_LIFE}>Daily Life</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.DERIVATIVES}>Derivatives</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.GRAMMAR}>Grammar</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.LITERATURE}>Literature</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.MQA}>Mottoes, Quotes, and Abbreviations</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.MYTHOLOGY}>Mythology</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.PENTATHLON}>Pentathlon</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.READING_COMP}>Reading Comprehension</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.ROMAN_HISTORY}>Roman History</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.SPEECH}>Speech Events</DropdownItem>
                                    <DropdownItem className="bg-dark" tag={RRNavLink} to={routes.VOCAB}>Vocabulary</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem>
                                <NavLink tag={RRNavLink} to={routes.CONTACT}>Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(Navigation);

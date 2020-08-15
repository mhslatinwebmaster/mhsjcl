import React, { Component } from "react";
import {
    Row,
    Col } from "reactstrap";

class Officer extends Component {
    render() {
        let emails = [];
        if (this.props.multiple) {

            emails = this.props.emails.map(function(email, index) {
                return (<p style={{marginBottom: "3px"}}><a href={"mailto:" + email}>{ email }</a>{index === this.props.emails.length - 1 ? "" : ", "}</p>);
            }.bind(this));
        }

        return (
            <Row height="500">
                <Col md="12" style={{padding: "5px"}}>
                    <h5 style={{fontFamily: "Trajan Pro", fontWeight: "bold", fontSize: "20px"}}>{this.props.name}</h5>
                    <h6 style={{fontFamily: "Trajan Pro", fontSize: "18px"}}>{this.props.position}</h6>
                    { this.props.multiple ?
                        emails :
                        <p style={{marginBottom: "3px"}}><a href={"mailto:" + this.props.email}>{ this.props.email }</a></p> }
                    <p>{this.props.bio}</p>
                </Col>
            </Row>
        );
    }
}

export default Officer;

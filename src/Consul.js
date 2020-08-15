import React, { Component } from "react";
import {
    Container,
    Jumbotron } from "reactstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import MobileCheck from "./MobileCheck";
import CheckScroll from "./CheckScroll";
import * as routes from "./Routes";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import EndOfYear2020 from "./files/consul/2019-2020/End of the year Consul 2020.pdf";
import OpenHouse2020 from "./files/consul/2019-2020/Open House Template FINAL 2020.pdf";
import December2019 from "./files/consul/2019-2020/Absolute Final December final template .pdf";
import October2019 from "./files/consul/2019-2020/final template 9_19 issue-4.pdf";
import OpenHouse2019 from "./files/consul/2018-2019/Consul Open House 2019.pdf";
import December2018 from "./files/consul/2018-2019/Consul Issue 2 2018.pdf";
import October2018 from "./files/consul/2018-2019/Consul Issue 1 2018.pdf";
import Convention2018 from "./files/consul/2017-2018/Consul - Convention.pdf";
import OpenHouse2018 from "./files/consul/2017-2018/OPEN HOUSE 2018.pdf";
import December2017 from "./files/consul/2017-2018/Consul+Issue+2+REAL+Final.pdf";
import October2017 from "./files/consul/2017-2018/Consul+Issue+1+October.pdf";
import Banquet2017 from "./files/consul/2016-2017/Banquet+Edition.docx";
import May2017 from "./files/consul/2016-2017/May+2017.docx";
import April2017 from "./files/consul/2016-2017/April+2017.docx";
import February2017 from "./files/consul/2016-2017/February+Consul+2016.docx";
import January2017 from "./files/consul/2016-2017/January+Consul+2016.docx";
import December2016 from "./files/consul/2016-2017/Official+Censored+December+Edition.docx";
import November2016 from "./files/consul/2016-2017/NOVEMBER+CONSUL+2016.docx";
import October2016 from "./files/consul/2016-2017/October+2016.docx";
import September2016 from "./files/consul/2016-2017/September+2016+Edition.docx";
import September2015 from "./files/consul/2015-2016/September20Consul.pdf";
import August2015 from "./files/consul/2015-2016/AugustConsul2015.pdf";
import Banquet2015 from "./files/consul/2014-2015/Banquet Consul.pdf";
import December2013 from "./files/consul/2013-2014/December 2013 Consul home.pdf";
import February2013 from "./files/consul/2012-2013/OIS Consul 2013.pdf";
import December2012 from "./files/consul/2012-2013/Consul December.pdf";
import October2012 from "./files/consul/2012-2013/Consul october sunday.pdf";
import February2012 from "./files/consul/2011-2012/OIS Consul 2012.pdf";
import November2007 from "./files/consul/2007-2008/Consul11_5_07.pdf";
import "./css/consul.css";

class Consul extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        ReactGA.pageview(routes.CONSUL);

        this.checkScroll = CheckScroll.bind(this);
        window.onscroll = this.checkScroll;
        window.onload = this.checkScroll;
        window.onresize = this.checkScroll;

        this.navbar = document.querySelectorAll(".navbar")[0];

        if (!MobileCheck()) {
            this.navbar.classList.remove("scrolled");
            this.navbar.classList.remove("navbar-dark");
            this.navbar.classList.add("navbar-light");
            this.navbar.classList.remove("bg-dark");
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>The Consul — Miramonte Latin Club</title>
                    <meta name="description" content="The official publication of the Miramonte Latin Club." />
                </Helmet>
                <Jumbotron id="consul-header">
                    <br />
                    <Zoom>
                        <h1 className="text-center display-3" style={{fontFamily: "Trajan Pro", color: "#eee"}}>The Consul</h1>
                    </Zoom>
                    <Fade>
                        <p className="text-center lead" style={{color: "#eee"}}>Make sure to send any article submissions to Nejla Ackdoe-Pagey and Cara Holden!</p>
                    </Fade>
                </Jumbotron>
                <Container>
                    <h3>2020-2021:</h3>
                    <ul>
                        {/* UPDATE THIS SECTION */}
                    </ul>
                    <hr />
                    <h3>2019-2020:</h3>
                    <ul>
                        <li><a href={EndOfYear2020} target="_blank" rel="noopener noreferrer">End of Year Edition 2020</a></li>
                        <li><a href={OpenHouse2020} target="_blank" rel="noopener noreferrer">Open House Edition 2020</a></li>
                        <li><a href={December2019} target="_blank" rel="noopener noreferrer">December 2019</a></li>
                        <li><a href={October2019} target="_blank" rel="noopener noreferrer">October 2019</a></li>
                    </ul>
                    <hr />
                    <h3>2018-2019:</h3>
                    <ul>
                        <li><a href={OpenHouse2019} target="_blank" rel="noopener noreferrer">Open House Edition 2019</a></li>
                        <li><a href={December2018} target="_blank" rel="noopener noreferrer">December 2018</a></li>
                        <li><a href={October2018} target="_blank" rel="noopener noreferrer">October 2018</a></li>
                    </ul>
                    <hr />
                    <h3>2017-2018:</h3>
                    <ul>
                        <li><a href={Convention2018} target="_blank" rel="noopener noreferrer">Convention Edition 2018</a></li>
                        <li><a href={OpenHouse2018} target="_blank" rel="noopener noreferrer">Open House Edition 2018</a></li>
                        <li><a href={December2017} target="_blank" rel="noopener noreferrer">December 2017</a></li>
                        <li><a href={October2017} target="_blank" rel="noopener noreferrer">October 2017</a></li>
                    </ul>
                    <hr />
                    <h3>2016-2017:</h3>
                    <ul>
                        <li><a href={Banquet2017} target="_blank" rel="noopener noreferrer">Banquet Edition 2017</a></li>
                        <li><a href={May2017} target="_blank" rel="noopener noreferrer">May 2017</a></li>
                        <li><a href={April2017} target="_blank" rel="noopener noreferrer">April 2017</a></li>
                        <li><a href={February2017} target="_blank" rel="noopener noreferrer">February 2017</a></li>
                        <li><a href={January2017} target="_blank" rel="noopener noreferrer">January 2017</a></li>
                        <li><a href={December2016} target="_blank" rel="noopener noreferrer">December 2016</a></li>
                        <li><a href={November2016} target="_blank" rel="noopener noreferrer">November 2016</a></li>
                        <li><a href={October2016} target="_blank" rel="noopener noreferrer">October 2016</a></li>
                        <li><a href={September2016} target="_blank" rel="noopener noreferrer">September 2016</a></li>
                    </ul>
                    <hr />
                    <h3>2015-2016:</h3>
                    <ul>
                        <li><a href={September2015} target="_blank" rel="noopener noreferrer">September 2015</a></li>
                        <li><a href={August2015} target="_blank" rel="noopener noreferrer">August 2015</a></li>
                    </ul>
                    <hr />
                    <h3>2014-2015:</h3>
                    <ul>
                        <li><a href={Banquet2015} target="_blank" rel="noopener noreferrer">Banquet 2015</a></li>
                    </ul>
                    <hr />
                    <h3>2013-2014:</h3>
                    <ul>
                        <li><a href={December2013} target="_blank" rel="noopener noreferrer">December 2013</a></li>
                    </ul>
                    <hr />
                    <h3>2012-2013:</h3>
                    <ul>
                        <li><a href={February2013} target="_blank" rel="noopener noreferrer">February 2013</a></li>
                        <li><a href={December2012} target="_blank" rel="noopener noreferrer">December 2012</a></li>
                        <li><a href={October2012} target="_blank" rel="noopener noreferrer">October 2012</a></li>
                    </ul>
                    <hr />
                    <h3>2011-2012:</h3>
                    <ul>
                        <li><a href={February2012} target="_blank" rel="noopener noreferrer">February 2012</a></li>
                    </ul>
                    <hr />
                    <h3>2007-2008:</h3>
                    <ul>
                        <li><a href={November2007} target="_blank" rel="noopener noreferrer">November 2007</a></li>
                    </ul>
                </Container>
            </div>
        );
    }
}

export default Consul;

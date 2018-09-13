import React, { Component } from 'react';
import logo from '../../assets/logos/airplane.png'
import ticket from '../../assets/icons/tickets.png'
import vnLang from '../../assets/icons/vietnam-lang.png'
import unitedLang from '../../assets/icons/united-lang.png'
import iconLogin from '../../assets/icons/login.png'
import './Header.css'
export default class Header extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
        return(
                <header id="fh5co-header-section" className="sticky-banner">
                    <div className="container">
                        <div className="nav-header">
                            <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
                            <h1 id="fh5co-logo"><a href="index.html"><img src={logo} width={30} height={30}/> Travel</a></h1>

                            <nav id="fh5co-menu-wrap" role="navigation">
                                <ul className="sf-menu" id="fh5co-primary-menu">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li>
                                        <a href="vacation.html" className="fh5co-sub-ddown">Vacations</a>
                                        <ul className="fh5co-sub-menu">
                                            <li><a href="#">Family</a></li>
                                            <li><a href="#">CSS3 &amp; HTML5</a></li>
                                            <li><a href="#">Angular JS</a></li>
                                            <li><a href="#">Node JS</a></li>
                                            <li><a href="#">Django &amp; Python</a></li>
                                        </ul>
                                    </li>                                    
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
        )
    }
}
import React, { Component } from 'react';
import logo from '../../assets/logos/logo.png'
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
                <header id="fh5co-header-section" className="sticky-banner" style={{height:'70px'}}>
                    <div className="container" style={{height:'70px'}}>
                        <div className="nav-header" style={{height:'70px'}}>
                            <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark" style={{marginTop:'15px'}}><i></i></a>
                            <h1 id="fh5co-logo" style={{marginTop:'5px'}}><a href="/home"><img src={logo} height={60}/></a></h1>

                            <nav id="fh5co-menu-wrap" role="navigation" style={{marginTop:'0px'}}>
                                <ul className="sf-menu" id="fh5co-primary-menu">
                                    <li className="active"><a href="/home">Home</a></li>
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
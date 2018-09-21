import React, { Component } from 'react';
import logo from '../../assets/logos/logo.png'
import './Footer.css'
export default class Footer extends Component{
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
            <footer>
                <div id="footer">
                    <div class="container">
                        <div class="row row-bottom-padded-md">
                            <div class="col-md-4 col-sm-4 col-xs-12 fh5co-footer-link">
                                <img src={logo} height={60}/>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Top Flights Routes</h3>
                                <ul>
                                    <li><a href="#">Manila flights</a></li>
                                    <li><a href="#">Dubai flights</a></li>
                                    <li><a href="#">Bangkok flights</a></li>
                                    <li><a href="#">Tokyo Flight</a></li>
                                    <li><a href="#">New York Flights</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Top Hotels</h3>
                                <ul>
                                    <li><a href="#">Boracay Hotel</a></li>
                                    <li><a href="#">Dubai Hotel</a></li>
                                    <li><a href="#">Singapore Hotel</a></li>
                                    <li><a href="#">Manila Hotel</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Interest</h3>
                                <ul>
                                    <li><a href="#">Beaches</a></li>
                                    <li><a href="#">Family Travel</a></li>
                                    <li><a href="#">Budget Travel</a></li>
                                    <li><a href="#">Food &amp; Drink</a></li>
                                    <li><a href="#">Honeymoon and Romance</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Best Places</h3>
                                <ul>
                                    <li><a href="#">Boracay Beach</a></li>
                                    <li><a href="#">Dubai</a></li>
                                    <li><a href="#">Singapore</a></li>
                                    <li><a href="#">Hongkong</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 text-center">
                                <p class="fh5co-social-icons">
                                    <a href="#"><i class="icon-twitter2"></i></a>
                                    <a href="#"><i class="icon-facebook2"></i></a>
                                    <a href="#"><i class="icon-instagram"></i></a>
                                    <a href="#"><i class="icon-dribbble2"></i></a>
                                    <a href="#"><i class="icon-youtube"></i></a>
                                </p>
                                <p>Copyright 2016 Free Html5 <a href="#">Module</a>. All Rights Reserved. Made with <i class="icon-heart3"></i> by <a href="http://freehtml5.co/" target="_blank">Freehtml5.co</a> / Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
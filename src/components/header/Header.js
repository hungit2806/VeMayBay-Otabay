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
                                    <li className="active"><a href="/home">Trang Chủ</a></li>
                                    <li>
                                        <a href="home.html" className="fh5co-sub-ddown">Chuyên Mục</a>
                                        <ul className="fh5co-sub-menu">
                                            <li><a href="#">Hướng Dẫn Đặt Vé</a></li>
                                            <li><a href="#">Vé Rẻ Trong Tháng</a></li>
                                            <li><a href="#">Giới Thiệu</a></li>
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
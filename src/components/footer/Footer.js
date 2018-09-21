import React, { Component } from 'react';
import logo from '../../assets/logos/logo.png'
import './Footer.css'
import {DataAirport} from '../../data-mock/data-airport'
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
      renderTagliFooter(data){
          var renderMT = []
          for(let obj in data){
            renderMT.push(<li onClick={this.scrollToTop.bind(this,data[obj])}><a>{data[obj].Ten}</a></li>)
          }
          return renderMT;
      }
    scrollToTop(data){
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <footer>
                <div id="footer">
                    <div class="container">
                        <div class="row row-bottom-padded-md">
                            <div class="col-md-3 col-sm-3 col-md-offset-1 col-sm-offset-1 col-xs-12 fh5co-footer-link">
                                <img src={logo} height={60}/>
                                <ul>
                                    <li style={{marginTop:'15px'}}><a href="#">Liên Hệ</a></li>
                                    <li><a href="#">Quy Định Sử Dụng</a></li>
                                    <li><a href="#">Chính Sách Bảo Mật</a></li>
                                    <li><a href="#">Hướng Dẫn Thanh Toán</a></li>
                                    <li><a href="#">Hướng Dẫn Đặt Vé</a></li>
                                </ul>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Miền Bắc</h3>
                                <ul>                                  
                                    {this.renderTagliFooter(DataAirport.NoiDia.MienBac)}
                                </ul>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Miền Trung</h3>
                                <ul>                                  
                                    {this.renderTagliFooter(DataAirport.NoiDia.MienTrung)}
                                </ul>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Miền Nam</h3>
                                <ul>                                  
                                    {this.renderTagliFooter(DataAirport.NoiDia.MienNam)}
                                </ul>
                            </div>
                            <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                <h3>Quốc Tế</h3>
                                <ul>                                  
                                    {this.renderTagliFooter(DataAirport.QuocTe)}
                                </ul>
                            </div>
                        </div>
                        <div class="row" style={{marginTop:'10px'}}>
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
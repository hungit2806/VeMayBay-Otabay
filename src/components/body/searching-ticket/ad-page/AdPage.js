import React, { Component } from 'react';
import './AdPage.css';
export default class AdPage extends Component{
    render(){
        return(
            <section class="professional_builder row">
            <div class="container">
                <div class="row builder_all">
                        <div class="col-md-3 col-sm-6 builder">
                            <img class="fa fa-search"></img>
                            <h4>Tìm kiếm dễ dàng</h4>
                        </div>
                        <div class="col-md-3 col-sm-6 builder">
                            <img class="fa fa-telemarketer"></img>
                            <h4>Hỗ trợ nhanh chóng</h4>
                        </div>
                        <div class="col-md-3 col-sm-6 builder">
                            <img class="fa fa-receipt"></img>
                            <h4>Hoạt động 24/7</h4>
                        </div>
                        <div class="col-md-3 col-sm-6 builder">
                            <img class="fa fa-globe"></img>
                            <h4>Giá vé rẻ nhất</h4>
                        </div>
                </div>
            </div>
        </section>
        );
    }
}
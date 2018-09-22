import React, { Component } from 'react';
import './AdPage.css';
import Airplane1 from '../../../../assets/images/Airplane1.jpg'
import Tick from '../../../../assets/icons/checked.png'
import { DataAirport } from '../../../../data-mock/data-airport'
import AirAsia from '../../../../assets/images/hangve/air-asia.png'
import Cathay from '../../../../assets/images/hangve/cathay.png'
import Cebu from '../../../../assets/images/hangve/cebu.png'
import Emirates from '../../../../assets/images/hangve/emirates.png'
import Hok from '../../../../assets/images/hangve/hok.png'
import Jetstar from '../../../../assets/images/hangve/jetstart.png'
import Malaysia from '../../../../assets/images/hangve/malaysia.png'
import Scot from '../../../../assets/images/hangve/scoot.jpg'
import Singapo from '../../../../assets/images/hangve/singapore.png'
import Thailion from '../../../../assets/images/hangve/thailion.png'
import Vietjet from '../../../../assets/images/hangve/vietjet.png'
import VNairline from '../../../../assets/images/hangve/vnairline.png'
const HangVe = [AirAsia,Cathay,Cebu,Emirates,Hok,Jetstar,Malaysia,Scot,Singapo,Thailion,Vietjet,VNairline]
export default class AdPage extends Component{
    imageClick(){
        console.log("click ne");
    }
    renderImgSlider(){
        var renderImg = []
        for (let obj in DataAirport.NoiDia){
            let VungMien = DataAirport.NoiDia[obj]
            for(let obj2 in VungMien){
                renderImg.push( 
                    <div>
                        <img class="img-slider" src={VungMien[obj2].img}/>
                        <div class="name-location">{VungMien[obj2].Ten}</div>
                    </div>);
            }
        }
        return renderImg;
    }
    renderHangVe(){
        var renderHang = []
        HangVe.map((obj,index)=>{
            renderHang.push(
                <div>
                    <img class="img-slider" style={{height:'30px',width:'auto'}} src={obj}/>
                </div>
            )
        })
        return renderHang;
    }
    render(){
        return(
            <div>
                <section class="professional_builder row">
                    <div class="container">
                        <div class="row builder_all">
                                <div class="col-md-3 col-sm-6 builder">
                                    <div class="fa fa-search"></div>
                                    <h4>Tìm Kiếm Dễ Dàng</h4>
                                </div>
                                <div class="col-md-3 col-sm-6 builder">
                                    <div class="fa fa-telemarketer"></div>
                                    <h4>Thanh Toán Nhanh Chóng</h4>
                                </div>
                                <div class="col-md-3 col-sm-6 builder">
                                    <div class="fa fa-receipt"></div>
                                    <h4>Hoạt Động 24/7</h4>
                                </div>
                                <div class="col-md-3 col-sm-6 builder">
                                    <div class="fa fa-globe"></div>
                                    <h4>Giá Vé Rẻ Nhất</h4>
                                </div>
                        </div>
                    </div>
                </section>
                <div className="information-company">
                    <div class="row">
                        <div class="col-md-6 col-sm-6"> 
                            <img class="img-title" src={Airplane1} style={{width:'100%'}}></img>                         
                        </div>
                        <div class="col-md-6 col-sm-6"> 
                            <div class="title">Tại sao bạn nên đến với BayMo?</div>                                                
                        </div>
                        <div class="col-md-6 col-sm-6 content"><img src={Tick} style={{width:'20px'}}></img> Bạn đang gặp rất nhiều rắc rối với việc đặt vé máy bay phức tạp? Bạn khó tìm kiếm được vé máy bay giá rẻ các hãng? Hay gặp phiền hà về vấn đề thanh toán? BayMo là lựa chọn tốt nhất của bạn!!<br></br></div>                         
                        <div class="col-md-6 col-sm-6 content"><img src={Tick} style={{width:'20px'}}></img> Được phát triển dựa theo nhu cầu di chuyển bằng đường hàng không hiện nay, chúng tôi đã tiến hành thiết lập hệ thống giúp bạn tìm kiếm vé phù hợp với tài chính hay nhu cầu của bạn.<br></br> </div>                         
                        <div class="col-md-6 col-sm-6 content"><img src={Tick} style={{width:'20px'}}></img> Với những thiết kế thân thiện với người dùng, BayMo chắc chắn và sẽ cố gắng làm hài lòng quý khách, giúp quý khách trải nghiệm một môi trường đặt vé an toàn - tiện lợi - nhanh gọn nhất.<br></br></div> 
                        <div class="col-md-6 col-sm-6 content"><img src={Tick} style={{width:'20px'}}></img> Quý khách luôn tìm được vé rẻ cho mình với chức năng tìm vé rẻ theo tháng của chúng tôi.</div> 
                    </div>
                </div>
                <div class="container-slider">
                    <div class="title">Điểm du lịch phổ biến</div>
                    <section class="slider responsive">
                       {this.renderImgSlider()}
                    </section>
                </div>
                <div class="airplane-info">
                    <section class="slider responsive">
                        {this.renderHangVe()}
                    </section>
                </div>
            </div>
                
        );
    }
}

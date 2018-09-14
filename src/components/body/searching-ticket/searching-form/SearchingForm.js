import React, { Component } from 'react';
import airplaneUp from '../../../../assets/icons/airplane-up.png'
import airplaneDown from '../../../../assets/icons/airplane-down.png'
import dateIcon from '../../../../assets/icons/date.png'
import planeChair from '../../../../assets/icons/plane-chair.png'
import family from '../../../../assets/icons/family.png'
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

import './SearchingForm.css'
const PAGE_FLIGHTS = 0;
const PAGE_ODERS = 1;
export default class SearchingForm extends Component{
    constructor(props){
        super(props)
        this.state={
            idPage:PAGE_FLIGHTS,
            dateFrom : new Date(),
            dateTo : new Date()
        }
    }
    selectPage(idPage){
        console.log(idPage);
        this.setState({
            idPage:idPage
        })
    }
    handleChangeFromDate(e, date){
        console.log(e, date);
        this.setState({dateFrom: date})
    }
    handleChangeToDate(e, date){
        console.log(e, date);
        this.setState({dateTo: date})
    }
    render(){
        return (
                <div className="fh5co-hero">
                <div className="fh5co-overlay"></div>
                <div className="fh5co-cover" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url(../../../../assets/images/cover_bg_1.jpg)'}}>
                    <div className="desc">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-md-8">
                                    <div className="tabulation animate-box">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li role="presentation" className="active">
                                            <a href="#flights" aria-controls="flights" role="tab" data-toggle="tab" onClick={this.selectPage.bind(this,PAGE_FLIGHTS)}>Tìm Vé</a>
                                        </li>
                                        <li role="presentation">
								    	    <a href="#hotels" aria-controls="oders" role="tab" data-toggle="tab" onClick={this.selectPage.bind(this,PAGE_ODERS)}>Kiểm Tra Đơn Hàng</a>
								        </li>
                                    </ul>
                                        <div className="tab-content">
                                            <div role="tabpanel" className={this.state.idPage===PAGE_FLIGHTS?"tab-pane active":"tab-pane"} id="flights">
                                                <div className="row">
                                                    <div className="col-xxs-12 col-xs-6 mt">
                                                        <div className="input-field">
                                                            <label for="from">Điểm khởi hành:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={airplaneUp} width={20} height={20}/></span>
                                                                <input type="text" class="form-control" placeholder="Hà Nội"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxs-12 col-xs-6 mt">
                                                        <div className="input-field">
                                                            <label for="from">Điểm đến:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={airplaneDown} width={20} height={20}/></span>
                                                                <input type="text" class="form-control" placeholder="TP. Hồ Chí Minh"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxs-12 col-xs-6 mt alternate">
                                                        <div className="input-field">
                                                            <label for="date-start">Ngày đi:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={dateIcon} width={20} height={20}/></span>
                                                                <div className="datepicker-design">
                                                                    <DatePicker value={this.state.dateFrom} mode="portal" onChange={this.handleChangeFromDate.bind(this)} formatDate={(date) => moment(date).format('DD/MM/YYYY')}/>
                                                                </div>
                                                                {/* <input type="text" value="" id="undefined-LandscapeDialog-undefined-39705" class="form-control" placeholder={moment().format("DD/MM/YYYY")}/>                                */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxs-12 col-xs-6 mt alternate">
                                                        <div className="input-field">
                                                            <label for="date-end">Ngày về:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={dateIcon} width={20} height={20}/></span>
                                                                <div className="datepicker-design">
                                                                    <DatePicker value={this.state.dateTo} mode="portal" onChange={this.handleChangeToDate.bind(this)} formatDate={(date) => moment(date).format('DD/MM/YYYY')}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 mt">
                                                        <section>
                                                            <label for="class">Hạng ghế:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={planeChair} width={20} height={20}/></span>
                                                                <select class="form-control class-of-chair">
                                                                    <option>Ghế Phổ Thông</option>
                                                                    <option>Ghế Phổ Thông Đặc Biệt</option>
                                                                    <option>Ghế Thương Gia</option>
                                                                    <option>Ghế Hạng Nhất</option>
                                                                </select>
                                                            </div>                                                      
                                                        </section>
                                                    </div>
                                                    <div className="col-sm-12 mt">
                                                        <section>
                                                            <label for="class">Số hành khách:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={family} width={20} height={20}/></span>
                                                                <input type="text" class="form-control" placeholder="0 Người lớn, 0 Trẻ em, 0 Em bé"/>
                                                            </div>
                                                        </section>
                                                    </div>                                               
                                                    <div className="col-xs-12">
                                                        <input type="submit" className="btn btn-primary btn-block" value="Tìm Chuyến Bay"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="tabpanel" className={this.state.idPage===PAGE_ODERS?"tab-pane active":"tab-pane"} id="oders">
                                                <div className="row">
                                                    <div className="col-sm-12 mt">
                                                        <div className="input-field">
                                                            <label for="from">Mã Số Đơn Hàng:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={airplaneUp} width={20} height={20}/></span>
                                                                <input type="text" class="form-control" placeholder="Mã số"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 mt">
                                                        <div className="input-field">
                                                            <label for="from">Email/Số Điện Thoại:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={airplaneDown} width={20} height={20}/></span>
                                                                <input type="text" class="form-control" placeholder="Email/Số Điện Thoại"/>
                                                            </div>
                                                        </div>
                                                    </div>                                                                                             
                                                    <div className="col-xs-12">
                                                        <input type="submit" className="btn btn-primary btn-block" value="Tìm Kiếm Đơn Hàng"/>
                                                    </div>
                                                </div>
                                            </div>                                                                 
                                        </div>
                                    </div>
                                </div>
                                <div class="desc2 animate-box">
                                    <div class="col-sm-4 col-sm-push-1 col-md-4 col-md-push-1">
                                        <p>HandCrafted by <a href="http://frehtml5.co/" target="_blank" class="fh5co-site-name">FreeHTML5.co</a></p>
                                        <h2>Exclusive Limited Time Offer</h2>
                                        <h3>Fly to Hong Kong via Los Angeles, USA</h3>
                                        <span class="price">$599</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import airplaneUp from '../../../../assets/icons/airplane-up.png'
import airplaneDown from '../../../../assets/icons/airplane-down.png'
import dateIcon from '../../../../assets/icons/date.png'
import planeChair from '../../../../assets/icons/plane-chair.png'
import family from '../../../../assets/icons/family.png'
import child from '../../../../assets/icons/child.png'
import baby from '../../../../assets/icons/baby.png'
import adult from '../../../../assets/icons/adult.png'
import search from '../../../../assets/icons/search.png'
import DatePicker from '../../../extend-component/DatePicker';
import { DataAirport } from '../../../../data-mock/data-airport'
import moment from 'moment';

import './SearchingForm.css'
const PAGE_ONEWAY = 0;
const PAGE_ROUNDTRIP = 1;
export default class SearchingForm extends Component{
    constructor(props){
        super(props)
        this.state={
            idPage:PAGE_ONEWAY,
            dateFrom : new Date(),
            dateTo : new Date(),
            valueFrom:'',
            valueTo:''  
        }
    }
    setStateInputFrom(from){
        this.setState({
            valueFrom:from
        })
    }
    renderModal(type){
        var mienBac = DataAirport.NoiDia.MienBac;
        var mienTrung = DataAirport.NoiDia.MienTrung;
        var mienNam = DataAirport.NoiDia.MienNam;
        if(type=='from'){
            return (
            <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">        
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h3 class="modal-title">Điểm khởi hành</h3>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-xxs-12 col-xs-12 mt">
                                    <div class="input-group">
                                        <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={search} width={20} height={20}/></span>
                                        <input type="text" class="form-control" style={{backgroundColor:'#fff'}} placeholder="Tìm kiếm..."/>                                                         
                                    </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt">
                                    <h4>Nội Địa</h4>
                                     {this.state.valueTo == ''?
                                     <ul>
                                        <li class="title">Miền Bắc</li>  
                                        {mienBac.map((object) =>
                                            <li data-dismiss="modal" onClick={this.setStateInputFrom.bind(this,(object.Ten+'('+object.Ma+')'))}><a><b>{object.Ten}</b><span>({object.Ma})</span> </a></li>
                                        )}                                     
                                    </ul>:null}  
                                    {this.state.valueTo == ''?
                                    <ul>       
                                        <li class="title">Miền Trung</li>
                                        {mienTrung.map((object) =>
                                            <li data-dismiss="modal" onClick={this.setStateInputFrom.bind(this,(object.Ten+'('+object.Ma+')'))}><a><b>{object.Ten}</b><span>({object.Ma})</span> </a></li>
                                        )} 
                                    </ul>:null} 
                                    {this.state.valueTo == ''?
                                    <ul>       
                                        <li class="title">Miền Nam</li>
                                        {mienNam.map((object) =>
                                            <li data-dismiss="modal" onClick={this.setStateInputFrom.bind(this,(object.Ten+'('+object.Ma+')'))}><a><b>{object.Ten}</b><span>({object.Ma})</span> </a></li>
                                        )}
                                    </ul>:null}                                                                   
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt">
                                    <h4>Quốc Tế</h4>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>        
                </div>
            </div>
          )
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
    renderAdultSelect(){
        var rows = []
        for (var i=0; i < 29; i++) {
            rows.push(<option value = {i+1}>{i+1}</option>)
        } 
        return rows
    }
    renderChildSelect(){
        var rows = []
        for (var i=0; i < 10; i++) {
            rows.push(<option value = {i}>{i}</option>)
        } 
        return rows
    }
    renderBabySelect(){
        var rows = []
        for (var i=0; i < 10; i++) {
            rows.push(<option value = {i}>{i}</option>)
        } 
        return rows
    }
    render(){
        return (
                <div className="fh5co-hero">
                <div className="fh5co-overlay"></div>
                {this.renderModal('from')}
                <div className="fh5co-cover" data-stellar-background-ratio="0.5" style={{backgroundImage: 'url(../../../../assets/images/cover_bg_1.jpg)'}}>
                    <div className="desc">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-md-8">
                                    <div className="tabulation animate-box">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li role="presentation" className="active">
                                            <a href="#flights" aria-controls="flights" role="tab" data-toggle="tab" onClick={this.selectPage.bind(this,PAGE_ONEWAY)}>Một Chiều</a>
                                        </li>
                                        <li role="presentation">
								    	    <a href="#hotels" aria-controls="oders" role="tab" data-toggle="tab" onClick={this.selectPage.bind(this,PAGE_ROUNDTRIP)}>Khứ Hồi</a>
								        </li>
                                    </ul>
                                        <div className="tab-content">
                                            <div role="tabpanel" className="tab-pane active" id="flights">
                                                <div className="row">
                                                    <div className="col-xxs-12 col-xs-6 mt">
                                                        <div className="input-field">
                                                            <label>Điểm khởi hành:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={airplaneUp} width={20} height={20}/></span>
                                                                <input type="text" class="form-control" readonly="readonly" style={{backgroundColor:'#fff'}} data-toggle="modal" data-target="#myModal" value={this.state.valueFrom}/>                                                         
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxs-12 col-xs-6 mt">
                                                        <div className="input-field">
                                                            <label>Điểm đến:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={airplaneDown} width={20} height={20}/></span>
                                                                <input type="text" class="form-control" readonly="readonly" style={{backgroundColor:'#fff'}} value={this.state.valueTo}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxs-12 col-xs-6 mt alternate">
                                                        <div className="input-field">
                                                            <label>Ngày đi:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={dateIcon} width={20} height={20}/></span>
                                                                <div className="datepicker-design">
                                                                    <DatePicker locale="vn" value={this.state.dateFrom} mode="portrait" onChange={this.handleChangeFromDate.bind(this)} formatDate={(date) => moment(date).format('DD/MM/YYYY')}/>
                                                                </div>
                                                                {/* <input type="text" value="" id="undefined-LandscapeDialog-undefined-39705" class="form-control" placeholder={moment().format("DD/MM/YYYY")}/>                                */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {this.state.idPage===PAGE_ONEWAY?
                                                        null:
                                                        <div className="col-xxs-12 col-xs-6 mt alternate">
                                                            <div className="input-field">
                                                                <label>Ngày về:</label>
                                                                <div class="input-group">
                                                                    <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={dateIcon} width={20} height={20}/></span>
                                                                    <div className="datepicker-design">
                                                                        <DatePicker locale="vn" value={this.state.dateTo} mode="portrait" onChange={this.handleChangeToDate.bind(this)} formatDate={(date) => moment(date).format('DD/MM/YYYY')}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>                                                   
                                                    }
                                                    <div className={this.state.idPage===PAGE_ONEWAY?"col-xxs-12 col-xs-6 mt alternate":"col-sm-12 mt"}>
                                                        <section>
                                                            <label>Hạng ghế:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={planeChair} width={20} height={20}/></span>
                                                                <select class="form-control class-of-chair">
                                                                    <option>Tất Cả</option>
                                                                    <option>Ghế Phổ Thông</option>
                                                                    <option>Ghế Phổ Thông Đặc Biệt</option>
                                                                    <option>Ghế Thương Gia</option>
                                                                    <option>Ghế Hạng Nhất</option>
                                                                </select>
                                                            </div>                                                      
                                                        </section>
                                                    </div>
                                                    <div className="col-sm-4 col-xs-12 mt alternate">
                                                        <section>
                                                            <label className='labelPerson'>Người Lớn (> 12 Tuổi):</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={adult} width={20} height={20}/></span>
                                                                {/* <input type="text" class="form-control" placeholder="0 Người lớn, 0 Trẻ em, 0 Em bé"/> */}
                                                                <select class="form-control class-of-chair">
                                                                      {this.renderAdultSelect()}                                                             
                                                                </select>
                                                            </div>
                                                        </section>
                                                    </div>
                                                    <div className="col-sm-4 col-xs-12 mt alternate">
                                                        <section>
                                                            <label className='labelPerson'>Trẻ Em (2-11 Tuổi): </label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={child} width={20} height={20}/></span>
                                                                {/* <input type="text" class="form-control" placeholder="0 Người lớn, 0 Trẻ em, 0 Em bé"/> */}
                                                                <select class="form-control class-of-chair">
                                                                      {this.renderChildSelect()}                                                             
                                                                </select>
                                                            </div>
                                                        </section>
                                                    </div>
                                                    <div className="col-sm-4 col-xs-12 mt alternate ">
                                                        <section>
                                                            <label className='labelPerson'>Em Bé (1-2 Tuổi):</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={baby} width={20} height={20}/></span>
                                                                {/* <input type="text" class="form-control" placeholder="0 Người lớn, 0 Trẻ em, 0 Em bé"/> */}
                                                                <select class="form-control class-of-chair">
                                                                      {this.renderBabySelect()}                                                             
                                                                </select>
                                                            </div>
                                                        </section>
                                                    </div>                                               
                                                    <div className="col-xs-12">
                                                        <input type="submit" className="btn btn-primary btn-block" value="Tìm Chuyến Bay"/>
                                                    </div>
                                                </div>
                                            </div>                                                                                                          
                                        </div>
                                    </div>
                                </div>                          
                                <div class="desc2 animate-box">
                                    <div class="col-sm-4 col-sm-push-1 col-md-4 col-md-push-1">
                                        <h2>BayMo.Com </h2>
                                        <h3>* Săn Vé Máy Bay Giá Rẻ</h3>
                                        <h3>* Giao dịch Uy Tín - Xuất Vé Nhanh Chóng</h3>
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
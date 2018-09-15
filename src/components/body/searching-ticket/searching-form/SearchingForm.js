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
import { DataAirport,RelationshipAirport } from '../../../../data-mock/data-airport'
import moment from 'moment';

import './SearchingForm.css'
const PAGE_ONEWAY = 0;
const PAGE_ROUNDTRIP = 1;
var mienBac = DataAirport.NoiDia.MienBac;
var mienTrung = DataAirport.NoiDia.MienTrung;
var mienNam = DataAirport.NoiDia.MienNam;

export default class SearchingForm extends Component{
    
    constructor(props){
        super(props)
        this.state={
            idPage:PAGE_ONEWAY,
            dateFrom : new Date(),
            dateTo : new Date(),
            valueFrom:'',
            valueTo:'',
            MSFrom:'',
            MSTo:''  
        }
    }
    setStateInput(value,MS,type){
        if(type=='from'){
            this.setState({
                valueFrom:value,
                MSFrom:MS
            })
        }else{
            this.setState({
                valueTo:value,
                MSTo:MS
            })
        }
    }
    rederAllAirFlight(obj,type){
        var renderReturn = []
        for (var prop in obj) {
            var object = obj[prop];
            renderReturn.push(<li data-dismiss="modal" onClick={this.setStateInput.bind(this,(object.Ten+' ('+object.Ma+')'),object.Ma,type)}><a><b>{object.Ten}</b><span>({object.Ma})</span> </a></li>)           
        }
        return renderReturn;
    }
    renderAirPortMienTrung(type){
        var renderReturn = [];
        var object = null;
        if(type=='from'){
            object = RelationshipAirport[this.state.MSTo].MienTrung;
        }else{
            object = RelationshipAirport[this.state.MSFrom].MienTrung;
        }
       
        for(let i=0; i < object.length; i++){
            renderReturn.push(<li data-dismiss="modal" onClick={this.setStateInput.bind(this,(object[i].Ten+' ('+object[i].Ma+')'),object[i].Ma,type)}><a><b>{object[i].Ten}</b><span>({object[i].Ma})</span> </a></li>)           
        }
        return renderReturn;
    }
    renderAirPortMienBac(type){
        var renderReturn = [];
        var object = null;
        if(type=='from'){
            object = RelationshipAirport[this.state.MSTo].MienBac;
        }else{
            object = RelationshipAirport[this.state.MSFrom].MienBac;
        }
       
        for(let i=0; i < object.length; i++){
            renderReturn.push(<li data-dismiss="modal" onClick={this.setStateInput.bind(this,(object[i].Ten+' ('+object[i].Ma+')'),object[i].Ma,type)}><a><b>{object[i].Ten}</b><span>({object[i].Ma})</span> </a></li>)           
        }
        return renderReturn;
    }
    renderAirPortMienNam(type){
        var renderReturn = [];
        var object = null;
        if(type=='from'){
            object = RelationshipAirport[this.state.MSTo].MienNam;
        }else{
            object = RelationshipAirport[this.state.MSFrom].MienNam;
        }
       
        for(let i=0; i < object.length; i++){
            renderReturn.push(<li data-dismiss="modal" onClick={this.setStateInput.bind(this,(object[i].Ten+' ('+object[i].Ma+')'),object[i].Ma,type)}><a><b>{object[i].Ten}</b><span>({object[i].Ma})</span> </a></li>)           
        }
        return renderReturn;
    }
    renderModal(type){
        
        return (
            <div id={type=='from'?"modal-from":"modal-to"} class="modal fade" role="dialog">
                <div class="modal-dialog">        
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h3 class="modal-title">{type==='from'?"Điểm khởi hành":"Điểm Đến"}</h3>
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
                                     {(this.state.valueTo == '' && type=='from')||(this.state.valueFrom == '' && type=='to')?
                                     <ul>
                                        <li class="title">Miền Bắc</li>  
                                        {this.rederAllAirFlight(mienBac,type)}                                     
                                    </ul>:
                                    <ul>
                                        <li class="title">Miền Bắc</li> 
                                        {this.renderAirPortMienBac(type)}
                                    </ul>
                                    }  
                                    {(this.state.valueTo == '' && type=='from')||(this.state.valueFrom == '' && type=='to')?
                                    <ul>       
                                        <li class="title">Miền Trung</li>
                                        {this.rederAllAirFlight(mienTrung,type)}
                                    </ul>:
                                    <ul>
                                        <li class="title">Miền Trung</li> 
                                        {this.renderAirPortMienTrung(type)}
                                    </ul>
                                    }
                                    {(this.state.valueTo == '' && type=='from')||(this.state.valueFrom == '' && type=='to')?
                                    <ul>       
                                        <li class="title">Miền Nam</li>
                                        {this.rederAllAirFlight(mienNam,type)}
                                    </ul>:
                                    <ul>
                                        <li class="title">Miền Nam</li> 
                                        {this.renderAirPortMienNam(type)}
                                    </ul>
                                    }
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
                {this.renderModal('to')}
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
                                                                <input type="text" class="form-control" readonly="readonly" style={{backgroundColor:'#fff'}} data-toggle="modal" data-target="#modal-from" value={this.state.valueFrom}/>                                                         
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxs-12 col-xs-6 mt">
                                                        <div className="input-field">
                                                            <label>Điểm đến:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={airplaneDown} width={20} height={20}/></span>
                                                                <input type="text" class="form-control" readonly="readonly" style={{backgroundColor:'#fff'}} data-toggle="modal" data-target="#modal-to" value={this.state.valueTo}/>
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
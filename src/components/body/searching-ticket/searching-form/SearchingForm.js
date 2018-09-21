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
import circle from '../../../../assets/icons/circle.png'
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
            errorAirport:false,
            valueFrom:'',
            valueTo:'',
            MSFrom:'',
            MSTo:'',
            valueSearch:'',
            selectValueAdult:1,
            selectValueChild:0,
            selectValueBaby:0,  
        }
    }
    handleDayMonth(day){
        if(day<10){
            return '0'+String(day)
        }
        else{
            return String(day)
        }
    }
    parseUrlRequest(){
        if(this.state.valueFrom!='' && this.state.valueTo!='' && !this.state.errorAirport){
            var param = 'Request='+this.state.MSFrom+'-'
            + this.state.MSTo + '-'
            var dateFrom = this.state.dateFrom.getDate();
            var monthFrom = this.state.dateFrom.getMonth()+1;
            var yearFrom = this.state.dateFrom.getFullYear();
            var dateFromRequest=this.handleDayMonth(dateFrom)+''+this.handleDayMonth(monthFrom)+''+String(yearFrom);
            param += dateFromRequest;
            if(this.state.idPage != PAGE_ONEWAY){
                var dateTo = this.state.dateTo.getDate();
                var monthTo = this.state.dateTo.getMonth()+1;
                var yearTo = this.state.dateTo.getFullYear();
                var dateToRequest=this.handleDayMonth(dateTo)+''+this.handleDayMonth(monthTo)+''+String(yearTo);
                param += '-'+dateToRequest;
            }
            param += '-'+String (this.state.selectValueAdult)+'-'+String (this.state.selectValueChild) +'-'+String (this.state.selectValueBaby)
            if (typeof window !== 'undefined') {
                window.location.href = '/search-ticket?'+param;
            }
        }
    }
    handleChangeAdult(event){
        this.setState({
            selectValueAdult:event.target.value
        })
    }
    handleChangeChild(event){
        this.setState({
            selectValueChild:event.target.value
        })
    }
    handleChangeBaby(event){
        this.setState({
            selectValueBaby:event.target.value
        })
    }
    changeLocation()
    {
        var valueFrom = this.state.valueFrom; 
        var MSFrom = this.state.MSFrom;
        var valueTo = this.state.valueTo; 
        var MSTo = this.state.MSTo;
        this.setState({
            valueFrom:valueTo,
            MSFrom:MSTo
        })
        this.setState({
            valueTo:valueFrom,
            MSTo:MSFrom
        })
    }
    checkAirport(type,MS){
        var MSAP = ''
        if(type=='from'){
            MSAP = this.state.MSTo
        }else{
            MSAP = this.state.MSFrom
        }
        if(RelationshipAirport[MSAP] && this.state.valueFrom!='' && this.state.valueTo!=''){
            var obj = RelationshipAirport[MSAP];
            for (var prop in obj) {
                var list = obj[prop]
                for(let i = 0; i < list.length; i++){
                    if(MS == list[i].Ma){
                        this.setState({
                            errorAirport:false
                        })
                        return true;
                    }
                }
            }
            this.setState({
                errorAirport:true
            })
        }
        else if(this.state.valueFrom!='' && this.state.valueTo!=''){
            this.setState({
                errorAirport:true
            })
        }
    }
    handleChangeSearch(event){
        this.setState({
            valueSearch: event.target.value
        })
        if( event.target.value!=''){
            mienBac = mienNam = mienTrung = {}
            for (var prop in DataAirport) {
                let list = DataAirport[prop];
                for (var prop1 in list) {
                    let list1 = list[prop1]
                    for(var prop2 in list1){
                        let list2 = list1[prop2]
                        if(list2.Ma.toLowerCase().includes(event.target.value.toLowerCase()) || list2.Ten.toLowerCase().includes(event.target.value.toLowerCase()))
                        {
                            if(prop1=='MienBac'){
                                mienBac[prop2] = list2;
                            }else if(prop1=='MienTrung'){
                                mienTrung[prop2] = list2;
                            }else if(prop1=='MienNam'){
                                mienNam[prop2] = list2;
                            }
                            
                        }
                    }                   
                }    
            }
        }
        else{
            mienBac = DataAirport.NoiDia.MienBac;
            mienTrung = DataAirport.NoiDia.MienTrung;
            mienNam = DataAirport.NoiDia.MienNam;
        }
    }
    setStateInput(value,MS,type){
        if(type=='from'){
            this.setState({
                valueFrom:value,
                MSFrom:MS
            },function(){
                this.checkAirport(type,MS);
            })
        }else{
            this.setState({
                valueTo:value,
                MSTo:MS
            },
            function(){
                this.checkAirport(type,MS);
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
                                        <input value={this.state.valueSearch} onChange={this.handleChangeSearch.bind(this)} type="text" class="form-control" style={{backgroundColor:'#fff'}} placeholder="Tìm kiếm..."/>                                                         
                                    </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt">
                                    <h4>Nội Địa</h4>                 
                                     <ul>
                                        <li class="title">Miền Bắc</li>  
                                        {this.rederAllAirFlight(mienBac,type)}                                     
                                    </ul>                                   
                                    <ul>       
                                        <li class="title">Miền Trung</li>
                                        {this.rederAllAirFlight(mienTrung,type)}
                                    </ul>                 
                                    <ul>       
                                        <li class="title">Miền Nam</li>
                                        {this.rederAllAirFlight(mienNam,type)}
                                    </ul>
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
    setNullInput(){
        this.setState({
            valueSearch:''
        })
        mienBac = DataAirport.NoiDia.MienBac;
        mienTrung = DataAirport.NoiDia.MienTrung;
        mienNam = DataAirport.NoiDia.MienNam;
    }
    selectPage(idPage){
        console.log(idPage);
        this.setState({
            idPage:idPage
        })
    }
    handleChangeFromDate(e, date){
        this.setState({dateFrom: date})
    }
    handleChangeToDate(e, date){
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
                                                                <input type="text" class="form-control" readonly="readonly" style={{backgroundColor:'#fff'}} data-toggle="modal" data-target="#modal-from" value={this.state.valueFrom} onClick={this.setNullInput.bind(this)}/>                                                         
                                                            </div>
                                                        </div>
                                                        <div className="around-btn" onClick={this.changeLocation.bind(this)}> 
                                                            <img class="rotate-image" id="image" src={circle} width={30} height={30}></img>                                                                                                          
                                                        </div>
                                                    </div>
                                                    <div className="col-xxs-12 col-xs-6 mt">
                                                        <div className="input-field">
                                                            <label>Điểm đến:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={airplaneDown} width={20} height={20}/></span>
                                                                <input type="text" class="form-control" readonly="readonly" style={{backgroundColor:'#fff'}} data-toggle="modal" data-target="#modal-to" value={this.state.valueTo} onClick={this.setNullInput.bind(this)}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxs-12 col-xs-12 mt" style={{display:this.state.errorAirport?'block':'none'}}>
                                                        <span className="error-message">*Tuyến bay không tồn tại*</span>
                                                    </div>
                                                    <div className={this.state.idPage!=PAGE_ONEWAY?"col-xxs-12 col-xs-6 mt alternate":"col-sm-12 mt alternate"}>
                                                        <div className="input-field">
                                                            <label>Ngày đi:</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={dateIcon} width={20} height={20}/></span>
                                                                <div className="datepicker-design">
                                                                    <DatePicker locale="vn" value={this.state.dateFrom} mode="portrait" onChange={this.handleChangeFromDate.bind(this)} formatDate={(date) => moment(date).format('DD/MM/YYYY')} minDate={new Date()}/>
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
                                                                        <DatePicker locale="vn" value={this.state.dateTo} mode="portrait" onChange={this.handleChangeToDate.bind(this)} formatDate={(date) => moment(date).format('DD/MM/YYYY')} minDate={this.state.dateFrom}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>                                                   
                                                    }
                                                
                                                    <div className="col-sm-4 col-xs-12 mt alternate">
                                                        <section>
                                                            <label className='labelPerson'>Người Lớn (> 12 Tuổi):</label>
                                                            <div class="input-group">
                                                                <span class="input-group-addon" style={{backgroundColor:'#ffffff'}}><img src={adult} width={20} height={20}/></span>
                                                                {/* <input type="text" class="form-control" placeholder="0 Người lớn, 0 Trẻ em, 0 Em bé"/> */}
                                                                <select class="form-control class-of-chair" value={this.state.selectValueAdult} onChange={this.handleChangeAdult.bind(this)} >
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
                                                                <select class="form-control class-of-chair" value={this.state.selectValueChild} onChange={this.handleChangeChild.bind(this)}>
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
                                                                <select class="form-control class-of-chair" value={this.state.selectValueBaby} onChange={this.handleChangeBaby.bind(this)}>
                                                                      {this.renderBabySelect()}                                                             
                                                                </select>
                                                            </div>
                                                        </section>
                                                    </div>                                               
                                                    <div className="col-xs-12">
                                                        <input type="submit" className="btn btn-primary btn-block" value="Tìm Chuyến Bay" onClick={this.parseUrlRequest.bind(this)}/>
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
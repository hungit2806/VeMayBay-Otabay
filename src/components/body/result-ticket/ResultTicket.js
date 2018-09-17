import React, { Component } from 'react';
import './ResultTicket.css'
export default class ResultTicket extends Component{
    render(){
        return(
                <div>  
                <iframe name="flightframe" scrolling="no" id="flightframe" src="https://sbs.datacom.vn/Flights.aspx?ProductKey=nrv7y2kldkxfwxz" frameborder="0" style={{width:'100%',height:'600px'}}></iframe>    
                </div>       
        )
    }
}
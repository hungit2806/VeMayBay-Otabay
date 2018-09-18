import React, { Component } from 'react';
import { iframeResizer } from 'iframe-resizer'
import './ResultTicket.css'
export default class ResultTicket extends Component{
    componentDidMount () {
        iframeResizer({
          log:true,
          initCallback: () => {
            console.log('ready!')
          },
          resizedCallback: () => {
            console.log('resized!')
          }
        })
    }
    render(){
        return(
                <div className="ContainerIframe" style={{marginTop:"30px",marginBottom:'30px'}}>  
                    <iframe name="flightframe" scrolling="no" id="flightframe" src="https://sbs.datacom.vn/Flights.aspx?ProductKey=nrv7y2kldkxfwxz" frameborder="0" style={{width:'100%',height:'600px'}}></iframe>    
                </div>       
        )
    }
}
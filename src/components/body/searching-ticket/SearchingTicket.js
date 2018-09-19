import React, { Component } from 'react';
import SearchingForm from './searching-form/SearchingForm'
import AdPage from './ad-page/AdPage'
export default class SearchingTicket extends Component{
    render(){
        return (
            <div>
                <SearchingForm/>
                <AdPage/>
            </div>
        )
    }
}
import React, { Component } from 'react';
export default class Body extends Component{
    constructor(props){
        super(props);
        if(typeof window !== 'undefined')
        {
            window.location.href = '/home';
        } 
    }
    render(){
        return(
            null
        )
    }
}
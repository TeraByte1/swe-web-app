import * as React from 'react';
import {Component} from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import axios from 'axios';

export class LastPredsPage extends Component {


    rewind = e => {
        this.props.startOver();
        console.log(this.props);
    };

    getPreds = e => {
        //componentDidMount(){

        const url = "https://covid.joshgarde.com/nn-submit";
    
        this.state = this.props;
        axios.post(url, this.state.vals)
        .then(response => {
           console.log(response.data.prediction) 
           document.getElementById("pred").innerHTML=((response.data.prediction)*100).toFixed(2) + " %";
        })
        .catch(error => {
            console.log(error)
        })
    };   

    render() {
        const text = "hello";
        const { vals, startOver } = this.props;
        this.getPreds();
    return (
        <div>
        <PrimaryButton 
            text = "Start Over"
            onClick={this.rewind}
            />
        <h2>You have a</h2>
        <div id="pred"></div>
        <h2>chance of contracting COVID-19</h2>
        </div>
       
    );
   } //end render
} //end

export default LastPredsPage;
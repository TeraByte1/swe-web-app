import * as React from 'react';
import {Component} from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Spinner, Label } from '@fluentui/react/';
import axios from 'axios';

export class LastPredsPage extends Component {


    rewind = e => {
        this.props.startOver();
        console.log(this.props);
    };

    getPreds = e => {
        const url = "https://covid.joshgarde.com/nn-submit";
        this.state = this.props;
       /* document.getElementById("pred").innerHTML=(
        <div>
        <Label>Spinner with label positioned to right</Label>
        <Spinner label="Wait, wait..." ariaLive="assertive" labelPosition="right" />
      </div> ); */
        axios.post(url, this.state.vals)
        .then(response => {
           console.log("Prediction: "+ response.data.prediction) 
           document.getElementById("pred").innerHTML=( (response.data.prediction)*100) .toFixed(2) + " %";
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
        <div>   
        <h2>Your chances of contracting COVID-19:</h2>
        <div id="pred"></div>
        </div>
       </div>
    );
   } //end render
} //end

export default LastPredsPage;
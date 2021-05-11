import * as React from 'react';
import {Component} from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import axios from 'axios';

export class LastPredsPage extends Component {


    goBack = e => {
        this.props.backPage();
        console.log(this.props);
        console.log(this.props.vals['age'].value);
    };

    getPreds = e => {
        //componentDidMount(){

        const url = "https://covid.joshgarde.com/nn-submit";
    
        this.state = this.props;
        const example = {
        "me_other": "Someone Else",
        "age": 60,
        "high_risk_exposure_occupation": false,
        "high_risk_interactions": false,
        "diabetes": true,
        "chd": false,
        "htn": false,
        "cancer": false,
        "asthma": true,
        "copd": false,
        "autoimmune_dis": true,
        "temperature": 39,
        "pulse": 90,
        "smoker": true,
        "labored_respiration": true,
        "cough": false,
        "fever": true,
        "sob": false,
        "diarrhea": false,
        "fatigue": false,
        "headache": false,
        "loss_of_smell": false,
        "loss_of_taste": false,
        "runny_nose": false,
        "muscle_sore": false,
        "sore_throat": false,
        'me_other': "Someone Else"
        };


        

        console.log("printing VALS");
        console.log(this.state.vals)
        //console.log(example)
        //console.log(JSON.stringify(this.state));
        axios.post(url, this.state.vals)
        //axios.post(url, example2)
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
        const { vals } = this.props;
        this.getPreds();
    return (
        <div>
        <PrimaryButton 
            text = "Previous"
            onClick={this.goBack}
            />
        <h2>You have a</h2>
        <div id="pred"></div>
        <h2>chance of contracting COVID-19</h2>
        </div>
       
    );
   } //end render
} //end

export default LastPredsPage;
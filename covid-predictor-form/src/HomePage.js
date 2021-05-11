import * as React from 'react';
import {Component} from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

export class HomePage extends Component{
goNext = e => {
        this.props.nextPage();
        console.log(this.props);
    };

    render(){
      // const { vals, handleChange } = this.props;

    
    return (
        <div>
            <h2>COVID-19 Symptoms Predictor Tool</h2>
            <h5>This tool helps you understand upcoming symptoms based on your current COVID-19 situation. <br/>Let's help you identify upcoming symptoms by knowing what you can do to protect your loved ones.</h5>
            <PrimaryButton 
                text = "Start Screening"
                onClick={this.goNext}
            />
        </div>
    );
   
   } //end render
} //end  

export default HomePage;

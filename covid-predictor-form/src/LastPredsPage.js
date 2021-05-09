import * as React from 'react';
import {Component} from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';

export class LastPredsPage extends Component {

    goBack = e => {
        this.props.backPage();
        console.log(this.props);
    };

    render(){
    return (
        <div>
        <PrimaryButton 
            text = "Back"
            onClick={this.goBack}
            />
        <h1>Covid Predictions</h1>
        </div>
    );
   } //end render
} //end

export default LastPredsPage;
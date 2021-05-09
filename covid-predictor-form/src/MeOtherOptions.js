import * as React from 'react';
import {Component} from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';


const options: IChoiceGroupOption[] = [
  { key: 'A', text: 'Myself' , value:'Myself'},
  { key: 'B', text: 'Someone Else', value:'Someone Else'},
];

export class MeOtherOps extends Component{
goNext = e => {
        this.props.nextPage();
        console.log(this.props);
    };
goBack = e => {
        this.props.backPage();
    };    

    render(){
       const { vals, handleChange } = this.props;

    
    return (
        <div id="parent">
        <div className="whoFor">
            <ChoiceGroup options={options} 
            onChange={handleChange('me_other')} 
            label="Predict Severe COVID-19 Symptoms for:" required={true}/>
            </div>
            <div className="next-button">
            <PrimaryButton 
            text = "Next"
            onClick={this.goNext}
            />
            </div>
        </div>    
    );
   
   } //end render
} //end  

export default MeOtherOps;
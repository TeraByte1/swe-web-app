import * as React from 'react';
import {Component} from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';


const options: IChoiceGroupOption[] = [
  { key: 'A', text: 'American Indian or Alaska Native', value:'American Indian or Alaska Native'},
  { key: 'B', text: 'Asian', value:'Asian' },
  { key: 'C', text: 'Black or African American', value:'Black or African American' },
  { key: 'D', text: 'Hispanic or Latino', value:'Hispanic or Latino'  },
  { key: 'E', text: 'Native Hawaiian or other Pacific Islander', value: 'Native Hawaiian or other Pacific Islander'},
  { key: 'F', text: 'White', value:'White'},
];

export class EthnicityOps extends Component{
    goNext = e => {
        this.props.nextPage();
        console.log(this.props);

    };

    goBack = e => {
        this.props.backPage();
    };

    render(){
       const { vals, handleChange } = this.props;

    if(vals.me_other==="Myself"){
    return (
        <div id="parent">
        <div className="ethOps">
        <PrimaryButton 
            text = "Back"
            onClick={this.goBack}
            />
            <ChoiceGroup options={options} 
            onChange={handleChange('ethnicity')} 
            label="What is your ethnicity?" required={true}/>
            </div>
            <div className="next-button">
            <PrimaryButton 
            text = "Next"
            onClick={this.goNext}
            />
            </div>
        </div>    
    );
    } //end if myself

    else if(vals.me_other==="Someone Else"){
        return (
        <div id="parent">
        <div className="ethOps">
        <PrimaryButton 
            text = "Back"
            onClick={this.goBack}
            />
            <ChoiceGroup options={options} 
            onChange={handleChange('ethnicity')} 
            label="What is their ethnicity?" required={true}/>
            </div>
            <div className="next-button">
            <PrimaryButton 
            text = "Next"
            onClick={this.goNext}
            />
            </div>
        </div>    
    );
    } //end if for someone else
   
   } //end render
} //end ethops 

export default EthnicityOps;
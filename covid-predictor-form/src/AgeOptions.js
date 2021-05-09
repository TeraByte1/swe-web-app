import * as React from 'react';
import {Component} from 'react';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import { PrimaryButton } from '@fluentui/react/lib/Button';

const options: IChoiceGroupOption[] = [
  { key: 'A', text: 'Under 18' , value: 'Under 18'},
  { key: 'B', text: 'Between 18 and 64', value: 'Between 18 and 64' },
  { key: 'C', text: '65 or older', value: '65 or older'},
];

export class AgeOptions extends Component {
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
        <div className="ageOps">
            <PrimaryButton 
            text = "Back"
            onClick={this.goBack}
            />
            
            <ChoiceGroup options={options} 
            onChange={handleChange('age')} 
            label="How old are you?" required={true}/>
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
        <div className="ageOps">
            <PrimaryButton 
            text = "Back"
            onClick={this.goBack}
            />
            
            <ChoiceGroup options={options} 
            onChange={handleChange('age')} 
            label="How old are they?" required={true}/>
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
} //end ageops

export default AgeOptions;
import * as React from 'react';
import {Component} from 'react';
import { ChoiceGroup, IChoiceGroupOption } from '@fluentui/react/lib/ChoiceGroup';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';
import { SpinButton } from '@fluentui/react/lib/SpinButton';
import { Slider } from '@fluentui/react/lib/Slider';
import { Toggle } from '@fluentui/react/lib/Toggle';

const options: IChoiceGroupOption[] = [
  { key: 'A', text: 'Under 18' , value: 'Under 18'},
  { key: 'B', text: 'Between 18 and 64', value: 'Between 18 and 64' },
  { key: 'C', text: '65 or older', value: '65 or older'},
];

let ageVal = 0;

export class AgeOptions extends Component {
    goNext = e => {
        console.log("age val:"+ageVal);
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
            text = "Previous"
            onClick={this.goBack}
            />
            <Toggle label="My job puts me at high risk of getting COVID-19" inlineLabel value="true" inlineText onChange={handleChange('high_risk_exposure_occupation')}/>
            <Toggle label="I have recently been in contact with others who have tested positive for COVID-19" inlineLabel value="true" inlineText onChange={handleChange('high_risk_interactions')}/>

            <Slider
        label="My age is (18-100 years old):"
        min={18}
        max={100}
        showValue
        onChange={handleChange('age')}
      />
        <Slider
        label="My temperature is (33.5-39.6 °C):"
        min={33.5}
        max={39.6}
        step={0.1}
        showValue
        onChange={handleChange('temperature')}
      />

      <Slider
        label="My heart rate is (35-160 BPM):"
        min={35}
        max={160}
        showValue
        onChange={handleChange('pulse')}
      />    
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
            text = "Previous"
            onClick={this.goBack}
            />
            <Toggle label="Their job puts them at high risk of getting COVID-19" inlineLabel value="true" inlineText onChange={handleChange('high_risk_exposure_occupation')}/>
            <Toggle label="They have recently been in contact with others who have tested positive for COVID-19" inlineLabel value="true" inlineText onChange={handleChange('high_risk_interactions')}/>

            <Slider
        label="Their age is (18-100 years old):"
        min={18}
        max={100}
        showValue
        onChange={handleChange('age')}
      />
        <Slider
        label="Their temperature is (33.5-39.6 °C):"
        min={33.5}
        max={39.6}
        step={0.1}
        showValue
        onChange={handleChange('temperature')}
      />

      <Slider
        label="Their heart rate is (35-160 BPM):"
        min={35}
        max={160}
        showValue
        onChange={handleChange('pulse')}
      />    
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
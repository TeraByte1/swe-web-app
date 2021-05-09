import * as React from 'react';
import {Component} from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import {Checkbox} from '@fluentui/react';
import {Stack} from '@fluentui/react';

const stackTokens = {childrenGap: 10};

export class MedConditions extends Component{
    goNext = e => {
        this.props.nextPage();
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
            <div>
            <h3>Do any of the following apply to you?</h3>
            </div>
            <Stack tokens={stackTokens}>
            <Checkbox label="Obesity" onChange={handleChange('medConditions')}  />
            <Checkbox label="Smoking or vaping" onChange={handleChange('medConditions')} />
            <Checkbox label="Pregnancy" onChange={handleChange('medConditions')}/>
            <Checkbox label="Diabetes" onChange={handleChange('medConditions')} />
            </Stack>
            </div>
            <div className="next-button">
            <PrimaryButton 
            text = "Next"
            onClick={this.goNext}
            />
            </div>
        </div>    
    );
       }//end if myself

     else if(vals.me_other==="Someone Else"){
         return (
        <div id="parent">
        <div className="ageOps">
            <PrimaryButton 
            text = "Back"
            onClick={this.goBack}
            />
            <div>
            <h3>Do any of the following apply to them?</h3>
            </div>
            <Stack tokens={stackTokens}>
            <Checkbox label="Obesity" onChange={handleChange('medConditions')}  />
            <Checkbox label="Smoking or vaping" onChange={handleChange('medConditions')} />
            <Checkbox label="Pregnancy" onChange={handleChange('medConditions')}/>
            <Checkbox label="Diabetes" onChange={handleChange('medConditions')} />
            </Stack>
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


}


}

export default MedConditions;
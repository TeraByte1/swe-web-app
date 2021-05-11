import * as React from 'react';
import {Component} from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import {Checkbox, Toggle} from '@fluentui/react';
import {Stack} from '@fluentui/react';

const stackTokens = {childrenGap: 10};

export class MedConditions extends Component{
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
            text = "Previous"
            onClick={this.goBack}
            />
            <div>
            <h3>Which of the following conditions apply to you?</h3>
            </div>
            <Stack tokens={stackTokens}>
            <Toggle label="Cough" inlineLabel value="true" inlineText onChange={handleChange('cough')} />
            <Toggle label="Runny Nose" inlineLabel value="true" onChange={handleChange('runny_nose')} />
            <Toggle label="Fever" inlineLabel value="true" onChange={handleChange('fever')}/>
            <Toggle label="Shortness of Breath" inlineLabel value="true" onChange={handleChange('sob')} />
            <Toggle label="Diarrhea"  inlineLabel value="true" onChange={handleChange('diarrhea')}/>
            <Toggle label="Fatigue" inlineLabel value="true"  onChange={handleChange('fatigue')} />
            <Toggle label="Sore Throat" inlineLabel value="true" onChange={handleChange('sore_throat')} />
            <Toggle label="Headache" inlineLabel value="true"  onChange={handleChange('headache')}/>
            <Toggle label="Loss of Smell" inlineLabel value="true" onChange={handleChange('loss_of_smell')} />
            <Toggle label="Loss of Taste" inlineLabel value="true" onChange={handleChange('loss_of_taste')}/>
            <Toggle label="Smoking" inlineLabel value="true" onChange={handleChange('smoker')} />
            <Toggle label="Labored Respiration" inlineLabel value="true"  onChange={handleChange('labored_respiration')}/>
            <Toggle label="Asthma" inlineLabel value="true" onChange={handleChange('asthma')}/>
            <Toggle label="Muscle Soreness" inlineLabel value="true" onChange={handleChange('muscle_sore')} />
            <Toggle label="Diabetes" inlineLabel value="true" onChange={handleChange('diabetes')}/>
            <Toggle label="Heart Disease" inlineLabel value="true" onChange={handleChange('chd')} />
            <Toggle label="High Blood Pressure" inlineLabel value="true"  onChange={handleChange('htn')}/>
            <Toggle label="Cancer" inlineLabel value="true" onChange={handleChange('cancer')} />
            <Toggle label="Chronic Obstructive Pulmonary Disease" inlineLabel value="true" onChange={handleChange('copd')} />
            <Toggle label="Autoimmune Disease" inlineLabel value="true"  onChange={handleChange('autoimmune_dis')}/>
            </Stack>
            </div>
            <div className="next-button">
            <PrimaryButton 
            text = "Next"
            onClick={this.goNext}
            />
            </div>
            <div></div>
        </div>    
    );
       }//end if myself

     else if(vals.me_other==="Someone Else"){
         return (
        <div id="parent">
        <div className="ageOps">
            <PrimaryButton 
            text = "Previous"
            onClick={this.goBack}
            />
            <div>
            <h3>Which of the following conditions apply to them?</h3>
            </div>
            <Stack tokens={stackTokens}>
             <Toggle label="Cough" inlineLabel value="true" inlineText onChange={handleChange('cough')} />
            <Toggle label="Runny Nose" inlineLabel value="true" onChange={handleChange('runny_nose')} />
            <Toggle label="Fever" inlineLabel value="true" onChange={handleChange('fever')}/>
            <Toggle label="Shortness of Breath" inlineLabel value="true" onChange={handleChange('sob')} />
            <Toggle label="Diarrhea"  inlineLabel value="true" onChange={handleChange('diarrhea')}/>
            <Toggle label="Fatigue" inlineLabel value="true"  onChange={handleChange('fatigue')} />
            <Toggle label="Sore Throat" inlineLabel value="true" onChange={handleChange('sore_throat')} />
            <Toggle label="Headache" inlineLabel value="true"  onChange={handleChange('headache')}/>
            <Toggle label="Loss of Smell" inlineLabel value="true" onChange={handleChange('loss_of_smell')} />
            <Toggle label="Loss of Taste" inlineLabel value="true" onChange={handleChange('loss_of_taste')}/>
            <Toggle label="Smoking" inlineLabel value="true" onChange={handleChange('smoker')} />
            <Toggle label="Labored Respiration" inlineLabel value="true"  onChange={handleChange('labored_respiration')}/>
            <Toggle label="Asthma" inlineLabel value="true" onChange={handleChange('asthma')}/>
            <Toggle label="Muscle Soreness" inlineLabel value="true" onChange={handleChange('muscle_sore')} />
            <Toggle label="Diabetes" inlineLabel value="true" onChange={handleChange('diabetes')}/>
            <Toggle label="Heart Disease" inlineLabel value="true" onChange={handleChange('chd')} />
            <Toggle label="High Blood Pressure" inlineLabel value="true"  onChange={handleChange('htn')}/>
            <Toggle label="Cancer" inlineLabel value="true" onChange={handleChange('cancer')} />
            <Toggle label="Chronic Obstructive Pulmonary Disease" inlineLabel value="true" onChange={handleChange('copd')} />
            <Toggle label="Autoimmune Disease" inlineLabel value="true"  onChange={handleChange('autoimmune_dis')}/>
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
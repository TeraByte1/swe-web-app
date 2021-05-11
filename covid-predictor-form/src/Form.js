import * as React from 'react';
import {Component} from 'react';
import MeOtherOps from './MeOtherOptions';
import AgeOptions from './AgeOptions';
import MedConditions from './MedConditions';
import LastPredsPage from './LastPredsPage';

 

export class Form extends Component {
    state = {
        'page': 1,
        'me_other': "", //choice: myself or others
        'age': 0,
        'high_risk_exposure_occupation': false,
        'high_risk_interactions': false,
        'diabetes': false,
        'chd': false,
        'htn': false,
        'cancer': false,
        'asthma': false,
        'copd': false,
        'autoimmune_dis': false,
        'smoker': false,
        'temperature': 0,
        'pulse': 0,
        'labored_respiration': false,
        'cough': false,
        'fever': false,
        'sob': false,
        'diarrhea': false,
        'fatigue': false,
        'headache': false,
        'loss_of_smell': false,
        'loss_of_taste': false,
        'runny_nose': false,
        'muscle_sore': false,
        'sore_throat': false
    };

nextPage = () => {
    const { page } = this.state;
    this.setState({
        page: page + 1
    });
}

backPage = () => {
    const { page } = this.state;
    this.setState({
        page: page - 1
    });
}

startOver = () => {
    const { page } = this.state;
    this.setState({
        page: 1,
        'me_other': "", //choice: myself or others
        'age': 0,
        'high_risk_exposure_occupation': false,
        'high_risk_interactions': false,
        'diabetes': false,
        'chd': false,
        'htn': false,
        'cancer': false,
        'asthma': false,
        'copd': false,
        'autoimmune_dis': false,
        'smoker': false,
        'temperature': 0,
        'pulse': 0,
        'labored_respiration': false,
        'cough': false,
        'fever': false,
        'sob': false,
        'diarrhea': false,
        'fatigue': false,
        'headache': false,
        'loss_of_smell': false,
        'loss_of_taste': false,
        'runny_nose': false,
        'muscle_sore': false,
        'sore_throat': false
    });
}
//input = which state object
//e = element that was clicked
handleChange = input => e => {
    console.log("input:"+input+" changed");
    if(input==="age" || input==="temperature" || input==="pulse"){
        this.setState({
            [input]: e
        })
    }
    else if(e.target.value==="on" || e.target.value==="true"){
        this.setState({
            [input]: true} );   
    }
    else if(e.target.value==="Myself" || e.target.value==="Someone Else"){
        this.setState({
            [input]: e.target.value});
    }
}



render() {
    const { page } = this.state;
    const { me_other, age, diabetes, chd, htn, cancer, asthma, copd, autoimmune_dis, smoker, temperature, pulse, labored_respiration, cough, fever, sob, diarrhea, fatigue, headache, loss_of_smell, loss_of_taste, runny_nose, muscle_sore, sore_throat, high_risk_exposure_occupation, high_risk_interactions} = this.state;
    const vals = { me_other, age, diabetes, chd, htn, cancer, asthma, copd, autoimmune_dis, smoker, temperature, pulse, labored_respiration, cough, fever, sob, diarrhea, fatigue, headache, loss_of_smell, loss_of_taste, runny_nose, muscle_sore, sore_throat, high_risk_exposure_occupation, high_risk_interactions};

    switch (page) {
        case 1:
            return (
                <MeOtherOps
                nextPage = {this.nextPage} 
                handleChange = {this.handleChange}
                vals = {vals}
                />
            )    
        case 2:
            return (
                <AgeOptions
                nextPage = {this.nextPage} 
                backPage = {this.backPage}
                handleChange = {this.handleChange}
                vals = {vals}
                />
            )
        case 3:
            return (
                <MedConditions
                nextPage = {this.nextPage}
                backPage = {this.backPage} 
                handleChange = {this.handleChange}
                vals = {vals}
                />
            )    

        case 4:
        return (<LastPredsPage
        startOver = {this.startOver}
        vals = {vals}
        />)   

        default:
        break;
    };
}
}

export default Form;

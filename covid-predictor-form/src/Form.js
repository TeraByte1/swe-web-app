import * as React from 'react';
import {Component} from 'react';
import MeOtherOps from './MeOtherOptions';
import AgeOptions from './AgeOptions';
import EthnicityOps from './EthnicityOps';
import MedConditions from './MedConditions';
import LastPredsPage from './LastPredsPage';

 

export class Form extends Component {
    state = {
        page: 1,
        me_other: "", //choice: myself or others
        age: "", 
        ethnicity: "",
        medConditions: []
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

handleChange = input => e => {
    this.setState({
        [input]: e.target.value
    });
}

render() {
    const { page } = this.state;
    const { me_other, age, ethnicity, medConditions } = this.state;
    const vals = { me_other, age, ethnicity, medConditions};

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
                <EthnicityOps
                nextPage = {this.nextPage}
                backPage = {this.backPage} 
                handleChange = {this.handleChange}
                vals = {vals}
                />
            )
        case 4:
            return (
                <MedConditions
                nextPage = {this.nextPage}
                backPage = {this.backPage} 
                handleChange = {this.handleChange}
                vals = {vals}
                />
            )    

        case 5:
        return <LastPredsPage
        backPage = {this.backPage}/>;    

        default:
        break;
    };
}
}

export default Form;

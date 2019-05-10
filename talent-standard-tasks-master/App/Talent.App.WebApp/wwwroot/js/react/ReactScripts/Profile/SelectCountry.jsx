import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown } from 'semantic-ui-react'
import { countries } from '../Employer/common.js'

export default class SelectCountry extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }


    handleChange(event) {
        var data = Object.assign({}, this.props.location);
        //debugger;
        const name = event.target.name;
        console.log(name);
        let value = event.target.value;
        const id = event.target.id;

        data[name] = value;

        var updateData = {
            target: { name: "location", value: data }
        }

        //update props here
        this.props.handleChange(updateData);
    }

    render() {
        let countriesOptions = [];
        const selectedCountry = this.props.location.country;
        countriesOptions = Object.keys(countries).map((x) => <option key={x} value={x}>{x}</option>);

        return (
            <div className="field">
                <label>{this.props.label}</label>
                <select className="ui right labeled dropdown"
                    placeholder="Country"
                    value={selectedCountry}
                    onChange={this.handleChange}
                    name="country">

                    <option value="">Select a country</option>
                    {countriesOptions}
                </select>
               
            </div>
        )
    }

}
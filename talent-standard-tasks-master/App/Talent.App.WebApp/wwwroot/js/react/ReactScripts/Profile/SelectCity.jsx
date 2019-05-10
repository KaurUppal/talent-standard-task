import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown } from 'semantic-ui-react'
import { countries } from '../Employer/common.js'

export default class SelectCity extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }


    handleChange(event) {
        //debugger;
        var data = Object.assign({}, this.props.location);
        //required

        const name = event.target.name;
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
        let citiesOptions = [];
        let selectedCountry = this.props.location.country;
        const selectedCity = this.props.location.city;
        if (selectedCountry != "" && selectedCountry != null) {

            var popCities = countries[selectedCountry].map(x => <option key={x} value={x}> {x}</option>);
        }

        return (
            <div className="field">
                <label>{this.props.label}</label>
                <select
                    className="ui dropdown"
                    placeholder="City"
                    value={selectedCity}
                    onChange={this.handleChange}
                    name="city">
                    <option value="0"> Select a town or city</option>
                    {popCities}
                </select>
            </div>
        )
    }

}




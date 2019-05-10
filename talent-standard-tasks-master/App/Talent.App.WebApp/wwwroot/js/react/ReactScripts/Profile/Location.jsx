﻿import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import SelectCountry from './SelectCountry.jsx';
import SelectCity from './SelectCity.jsx';
import { countries } from '../Employer/common.js'

export class Address extends React.Component {
    constructor(props) {
        super(props);
        const addressData = props.addressData ?
            Object.assign({}, props.addressData) :
            {
                number: "",
                street: "",
                suburb: "",
                postCode: 0,
                city: "",
                country: ""
            };
        this.state = {
            newAddressData : addressData,
            editShow: false
        }
        this.closeEdit = this.closeEdit.bind(this);
        this.openEdit = this.openEdit.bind(this);

    }

    componentDidMount() {
        $('.ui.button.address')
            .popup();
    }

    closeEdit() {
        this.setState({
            editShow: false
        })
    }

    openEdit() {
        this.setState({
            editShow: true
        })
    }

    saveAddress() {
        const address = Object.assign({}, this.state.newAddressData);
        this.props.updateProfileData(address);
        this.props.saveProfileData(address);
    }

    handleChange() {
        //debugger;
        const data = Object.assign({}, this.state.newAddressData)
        data[event.target.name] = event.target.value
        this.setState({
            newAddressData: data
        })  
    }

    renderDisplay() {
        let address = this.state.newAddressData;
        return (
            <div className='ui sixteen wide column'>
                <React.Fragment>
                    <p>Address: {address.number}, {address.street}, {address.suburb}, {address.postCode} </p>
                    <p>City: {address.city}</p>
                    <p>Country: {address.country}</p>
                </React.Fragment>
                <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
            </div>
            )
    }

    renderEdit() {

        return (
            <div className='ui grid'>
                <div className="five wide column">
                    <ChildSingleInput
                        inputType="text"
                        label="Number"
                        name="number"
                        value={this.state.newAddressData.number}
                        controlFunc={this.handleChange}
                        maxLength={20}
                        placeholder="Enter your street number"
                        errorMessage="Please enter a valid street number"
                    />
                </div>
                <div className="six wide column">
                    <ChildSingleInput
                        inputType="text"
                        label="Name"
                        name="name"
                        value={this.state.newAddressData.name}
                        controlFunc={this.handleChange}
                        maxLength={20}
                        placeholder="Enter your street name"
                        errorMessage="Please enter a valid street name"
                    />
                </div>
                <div className="five wide column">
                    <ChildSingleInput
                        inputType="text"
                        label="Suburb"
                        name="suburb"
                        value={this.state.newAddressData.suburb}
                        controlFunc={this.handleChange}
                        maxLength={20}
                        placeholder="Enter your suburb"
                        errorMessage="Please enter a valid suburb"
                    />
                </div>
                <div className="six wide column">
                    <SelectCountry
                        label="Country"
                        location={this.state.newAddressData}
                        handleChange={this.handleChange}
                    />
                </div>
                <div className="six wide column">
                    <SelectCity
                        label="City"
                        location={this.state.newAddressData}
                        handleChange={this.handleChange}
                    />
                </div>
                <div className="four wide column">
                    <ChildSingleInput
                        inputType="text"
                        label="PostCode"
                        name="postCode"
                        value={this.state.newAddressData.postCode}
                        controlFunc={this.handleChange}
                        maxLength={20}
                        placeholder="Enter your Post Code"
                        errorMessage="Please enter a valid Post Code"
                    />
                </div>
                <div className="four wide column">
                    <button type="button" className="ui teal button" onClick={this.saveAddress}>Save</button>
                    <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
                </div>
                <div className="twelve wide column">
                   
                </div>
            </div>
            )
    }
   
    render() {
        return (
            this.state.editShow ? this.renderEdit() : this.renderDisplay()
        )
    }

}

export class Nationality extends React.Component {
    constructor(props) {
        super(props)
        const nationalityData = props.nationalityData ? props.nationalityData : "";
        this.state = {
            newnationalityData: nationalityData
        }
       
    }

    componentDidMount() {
        $('.ui.button.nationality')
            .popup();
    }

    handleChange() {
        const nationality = event.target.value;
        this.props.saveProfileData(nationality);
       
    }
    
    render() {
        let countriesOptions = [];
        const selectedCountry = this.state.newnationalityData;
        countriesOptions = Object.keys(countries).map((x) => <option key={x} value={x}>{x}</option>);

        return (
            <div className='ui grid'>
                <div className='fourteen wide column'>

                    <select className="ui right labeled dropdown"
                        placeholder="Country"
                        value={selectedCountry}
                        onChange={this.handleChange}
                        name="country">

                        <option value="">Select your Nationality</option>
                        {countriesOptions}
                    </select>

                </div>
                <div className='one wide column'>  </div>
                
            </div>
        )
    }
}
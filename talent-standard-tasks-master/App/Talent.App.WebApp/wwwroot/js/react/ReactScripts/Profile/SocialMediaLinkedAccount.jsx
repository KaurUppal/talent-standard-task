/* Social media JSX */
import React from 'react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup } from 'semantic-ui-react';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);

        const details = props.linkedAccounts ?
            Object.assign({}, props.linkedAccounts)
            : {
                linkedln: "",
                github: ""
            };
        this.state = {
            editLinked: false,
            newLinked: details
        }
        this.openEdit = this.openEdit.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
    }

    openEdit() {
        debugger;
        this.setState({
            editLinked: true
        })
    }

    closeEdit() {
        this.setState({
            editLinked: false
        })
    }

    saveEdit() {

    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newLinked)
        data[event.target.name] = event.target.value
        this.setState({
            newLinked: data
        })
    }

    componentDidMount() {
        $('.ui.button.social-media')
            .popup();
    }
    renderDisplay() {
        return (
            <div className='row'>
                <div className="ui sixteen wide column">

                    <button className="ui linkedin button" onClick={this.closeEdit}>
                        <i className="linkedin icon"></i>LinkedIn
                        <a href={this.state.newLinked.linkedln}/>
                    </button>
                    <button className="ui black github button">
                        <i className="github icon"></i>GitHub
                        <a href={this.state.newLinked.github}/>
                    </button>
                    <button type="button" className="ui right floated teal button" onClick={this.openEdit} >Edit</button>
                </div>
            </div>
        )
    }

    renderLinkedEdit() {
        return (
            <div className='ui sixteen wide column'>
                <ChildSingleInput
                    inputType="text"
                    label="Linkedln"
                    name="linkedln"
                    value="aman"
                    //{this.state.newLinked.linkedln}
                    controlFunc={this.handleChange}
                    maxLength={150}
                    placeholder="Enter your Linkedln url"
                    errorMessage="Please enter a valid Linkedln url"
                    width={10}
                />
                <ChildSingleInput
                    inputType="text"
                    label="GitHub"
                    name="github"
                    value="deep"
                    //{this.state.newLinked.github}
                    controlFunc={this.handleChange}
                    maxLength={150}
                    placeholder="Enter your GitHub url"
                    errorMessage="Please enter a valid GitHub url"
                />
                <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
            </div>
        )
    }


    render() {
        return (this.state.editLinked ? this.renderLinkedEdit() : this.renderDisplay())
        
        
}

}
import React from 'react';
import Cookies from 'js-cookie';

export default class Description extends React.Component {

    constructor(props) {
        super(props);
        let description = props.description.description;
        let summary = props.description.summary;
 
        this.state = {
            characters: 0,
            description: description,
            summary: summary,
            showEdit:false
        };
        this.update = this.update.bind(this);
        this.openEdit = this.openEdit.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
        this.handleCahnge = this.handleCahnge.bind(this);
    };

    openEdit() {
        let description = this.props.description ? this.props.description.description : "";
        let summary = this.props.description ? this.props.description.summary : "";
        this.setState({
            showEdit: true,
            description: description,
            summary: summary
        })
    }

    closeEdit() {
        this.setState({
            showEdit: false
        })
    }

    handleCahnge() {
        let data = Object.assign({}, this.state.description);
        if (event.target.name == "description") {
            this.setState({
                characters: event.target.value.length,
                description: event.target.value
            })

        }
        else {
            this.setState({
                summary:event.target.value
            })
        }
        
    }

    update() {
        let description = this.state.description;
        let summary = this.state.summary;
        this.setState({
            showEdit: false
        })
        this.props.saveProfileData(
            { description, summary });
    }

    renderDisplay() {
        let description = this.props.description ? this.props.description.description : "";
        let summary = this.props.description ? this.props.description.summary : "";   

        return (
            <div className="ui sixteen wide column">
                <div className="field">
                    <label>Summary</label>
                    <p>{summary}</p>
                </div>
                <div className="field">
                    <label>Description</label>
                    <p>{description}</p>
                </div>
                <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
            </div>
            )
    }

    renderEdit() {
        //let description = this.state.description;
        //let summary = this.state.summary;
        const characterLimit = 600;
        return (
            <div className="ui sixteen wide column">
                <div className="field" >
                    <input placeholder="Please provide a short summary about youself"
                        type="text"
                        name="summary"
                        value={this.state.summary}
                        onChange={this.handleCahnge}
                    />
                </div>
                <div className="field" >
                    <label>Summary must be no more than 150 characters</label>
                </div>
                <div className="field" >
                    <textarea maxLength={characterLimit}
                        placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add."
                        value={this.state.description}
                        onChange={this.handleCahnge}
                        name="description"
                    ></textarea>
                </div>
                <div className="field">
                    <label>Description must be between 150 and 600 characters</label>
                </div>
                <div className="field">
                    <button type="button" className="ui right floated teal button" onClick={this.update}>Save</button>
                    <button type="button" className="ui right floated teal button" onClick={this.closeEdit}>Cancel</button>
                </div>
                <p>{/*Characters remaining : {characters} / {characterLimit}*/}</p>
            </div>
            )
    }

    render() {
        
        let showEdit = this.state.showEdit;
        let characters = this.props.description ? this.props.description.length : 0;
        
        return (
            showEdit ? this.renderEdit() : this.renderDisplay()
        )
    }
}

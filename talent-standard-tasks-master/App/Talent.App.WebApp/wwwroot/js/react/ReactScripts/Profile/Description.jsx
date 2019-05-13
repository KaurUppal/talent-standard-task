import React from 'react';
import Cookies from 'js-cookie';

export default class Description extends React.Component {

    constructor(props) {
        super(props);
        let description = props.description.description ? props.description.description : "" 
        this.state = {
            characters: 0,
            description: description
        };
        this.update = this.update.bind(this);
    };

    update(event) {
        let data = {};
        data[event.target.name] = event.target.value;
        this.props.updateStateData(data);
        let description = event.target.value;
        this.setState({
            characters: description.length
        })
    }

    render() {
        const characterLimit = 600;
        let characters = this.props.description ? this.props.description.length : 0;
        
        return (
            <React.Fragment>
                <div className="ui sixteen wide column">
                    <div className="field" >
                        <input placeholder="Please provide a short summary about youself" />
                    </div>
                    <div className="field" >
                        <label>Summary must be no more than 150 characters</label>
                    </div>
                    <div className="field" >
                        <textarea maxLength={characterLimit} name="Description" placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add." value={this.state.description} onChange={this.update} ></textarea>
                    </div>
                    <div className="field">
                        <label>Description must be between 150 and 600 characters</label>
                    </div>
                    <div className="field">
                        <button type="button" className="ui right floated teal button" >Save</button>
                    </div>
                    <p>{/*Characters remaining : {characters} / {characterLimit}*/}</p>
                </div>
            </React.Fragment>
        )
    }
}

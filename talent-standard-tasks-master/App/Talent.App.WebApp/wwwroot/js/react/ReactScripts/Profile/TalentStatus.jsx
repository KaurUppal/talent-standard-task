import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react';
import { SingleInput } from '../Form/SingleInput.jsx';

export default class TalentStatus extends React.Component {
    constructor(props) {
        super(props);

       
    }
    
    componentDidMount() {
        $('.ui.button.address')
            .popup();
    }

   

    render() {

        return (
            <div className="ui form">
                <div className="grouped fields">
                    <label>Current Status</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="example2"
                            //checked="checked" 
                            />
                            <label>Actively looking for a job</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="example2"/>
                            <label>Not looking for a job at the moment</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="example2"/>
                            <label>Currently employed but open for the offers</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="example2"/>
                            <label>Will be available on later date</label>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
} 
import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Popup, Icon } from 'semantic-ui-react'


export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);
       
    };

   
    render() {
        return (
            <div className="ui segments">
                <div className="ui segment">
                    abc
                </div>
                <div className="ui segment">
                    <div className="ui two column stackable grid">
                        <div className="column"><img class="ui large image" src="https://react.semantic-ui.com/images/wireframe/square-image.png"/></div>
                    <div className="column">bjb</div> 
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui four column center aligned stackable grid">
                        <div className="column"><i className="user icon"></i></div>
                        <div className="column"><i className="file pdf outline icon"></i></div>
                        <div className="column"><i className="linkedin icon"></i></div>
                        <div className="column"><i className="github icon"></i></div>
                    </div>
                </div>
                <div className="ui segment">
                    hgjugu
                </div>
               
            </div>
            
            )
    }
}


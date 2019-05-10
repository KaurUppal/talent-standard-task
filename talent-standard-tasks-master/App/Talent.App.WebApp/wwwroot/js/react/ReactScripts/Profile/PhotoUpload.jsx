/* Photo upload section */
import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Button } from 'semantic-ui-react'

export default class PhotoUpload extends Component {
    constructor(props) {
        super(props);
        const imageId = props.imageId ? imageId : "https://react.semantic-ui.com/images/wireframe/square-image.png"
        this.state = {
            imageId: imageId
        }
        this.onChange = this.onChange.bind(this);
    };

    onChange() {

    }
    

    render() {

        return (
            <div className="ui two column grid">
                <div className="column">
                    <h1>Profile Photo</h1>
                </div>
                <div className="column">
                    <Button htmlFor="file" as="label" className="ui small circular image" ><img src={this.state.imageId}
                        />
                    </Button>
                    

                    <input type="file" id="file" style={{ display: "none" }} onChange={this.onChange} />

                    
                </div>
                
            </div>
        )
    }
}

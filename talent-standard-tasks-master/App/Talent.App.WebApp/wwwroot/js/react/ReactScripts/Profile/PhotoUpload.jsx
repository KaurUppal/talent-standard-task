/* Photo upload section */
import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Button } from 'semantic-ui-react'

export default class PhotoUpload extends Component {
    constructor(props) {
        super(props);
        const imageId = props.imageId ? props.imageId : "https://react.semantic-ui.com/images/wireframe/square-image.png"
        this.state = {
            imageId: imageId,
            uploadButton: "none",
            newFileUrl: null,
            newFile: null
        }
        this.fileSelectedChange = this.fileSelectedChange.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
    };

    fileUpload() {
        let file = this.state.newFile;
        const form = new FormData();
        form.append('files', file);
        var url = this.props.savePhotoUrl;

        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: url,
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': false
            },
            type: "POST",
            data: form,
            success: function (res) {
                console.log(res)
                if (res.success == true) {
                    TalentUtil.notification.show("Profile updated sucessfully", "success", null, null)
                } else {
                   
                    TalentUtil.notification.show("Profile did not update successfully", "error", null, null)
                }

            }.bind(this),
            error: function (res, a, b) {
                console.log(res)
                console.log(a)
                console.log(b)
            }
        })
    }

    fileSelectedChange() {
       
        let acceptedExt = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
        
        let selectedFile = event.target.files[0];
        console.log(event.target.files[0]);
        if (this.state.newFile) {
            URL.revokeObjectURL(newFile);
        }
        if (acceptedExt.includes(selectedFile.type)) {
            this.setState({
                uploadButton: "",
                newFileUrl: URL.createObjectURL(event.target.files[0]),
                newFile: event.target.files[0]
            })
        }
    }
    

    render() {
        
        let imageId = this.props.imageId ? this.props.imageId : "https://react.semantic-ui.com/images/wireframe/square-image.png";
        if (this.state.newFileUrl) {
            imageId = this.state.newFileUrl;
        }
        
        return (
            <div className="ui two column grid">
                <div className="column">
                    <h1>Profile Photo</h1>
                </div>
                <div className="column">
                    <Button htmlFor="file" as="label" className="ui small circular image" ><img src={imageId}
                        />
                    </Button>
                        <br></br>
                        <button type="submit" style={{ display: this.state.uploadButton, }} onClick={this.fileUpload} className="ui teal button"><i className="upload icon"></i>Upload</button>
                        <input type="file" id="file" style={{ display: "none" }} onChange={this.fileSelectedChange} />  
                </div>
                
            </div>
        )
    }
}

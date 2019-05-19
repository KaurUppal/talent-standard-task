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
            newFile:""
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
        debugger;
        
        let selectedFile = event.target.files[0];
        console.log(event.target.files[0]);
        if (selectedFile.type == "image/png" || selectedFile.type == "image/jpg") {
            this.setState({
                uploadButton: "",
                newFile: selectedFile
            })
        }
    }
    

    render() {
        let imageId = this.props.imageId;
        if (this.state.newFile) {
            imageId = this.state.newFile;
        }
        
        return (
            <div className="ui two column grid">
                <div className="column">
                    <h1>Profile Photo</h1>
                </div>
                <div className="column">
                    <form action={this.fileUpload} method="post">
                    <Button htmlFor="file" as="label" className="ui small circular image" ><img src={this.state.imageId}
                        />
                    </Button>
                        <br></br>
                        <button type="submit" style={{ display: this.state.uploadButton, }} className="ui teal button"><i className="upload icon"></i>Upload</button>
                        <input type="file" id="file" style={{ display: "none" }} onChange={this.fileSelectedChange} />
                    </form>
                    
                </div>
                
            </div>
        )
    }
}

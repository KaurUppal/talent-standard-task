import React from 'react';
import { Loader, Button } from 'semantic-ui-react';


export default class CompanyProfile extends React.Component {
    constructor(props) {
        super(props);
        let companyProfile = Object.assign({}, props.companyProfile);

        this.state = {
            companyProfile: companyProfile
        }
    }

    render() {
        let displayText = "We currently do not have specific skills that we are looking for";
        let companyProfile =this.props.companyProfile ? Object.assign({}, this.props.companyProfile)
            :
            {
                name: "",
                email: "",
                phone: null,
                firstName: null,
                lastName: null,
                location: {
                    country: null,
                    city: null
                }
            };
            let imageId = "https://react.semantic-ui.com/images/wireframe/square-image.png";
            return (
                <div className="ui card">
                    <div className="content">
                        <div className="ui container">
                            <Button htmlFor="file" as="label" className="ui tiny circular image" ><img src={imageId} />   
                            </Button>
                        </div>
                        <div className="center aligned header">
                            {companyProfile.name}
                        </div>
                        <div className="center aligned location">
                            <i className=" map marker alternate icon"></i>
                            {companyProfile.location.city}, {companyProfile.location.country}
                        </div>
                        <div className="center aligned summary">
                            {displayText}
                        </div>   
                    </div>
                    <div className="extra content">
                        <div className="summary"><i className="phone icon"></i> : {companyProfile.phone} </div>
                        <div className="summary"><i className="envelope icon"></i> : {companyProfile.email} </div>
                    </div>
            </div>
            )
    }
}
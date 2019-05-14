/* Language section */
import React from 'react';
import Cookies from 'js-cookie';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Button, Icon } from 'semantic-ui-react';

export default class Language extends React.Component {
    constructor(props) {
        super(props);
        const languageData = [...props.languageData];
        this.state = {
            showAdd: false,
            showEdit: false,
            languages: languageData,
            newLanguage: {
                name: "",
                level: ""
            }
        }
        this.closeAdd = this.closeAdd.bind(this);
        this.openAdd = this.openAdd.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.addLanguage = this.addLanguage.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
        this.openEdit = this.openEdit.bind(this);
    };
 
//functions to handle buttons
    deleteLanguage() {
        
    }

    addLanguage() {
        const languages = this.state.languages;
        const newLanguage = this.state.newLanguage;
        let data = {};
   
        this.setState({
            showAdd: false,
            languages: [...languages, newLanguage]
        }, () => {
            debugger;
            data["languages"] = this.state.languages;
            this.props.updateProfileData(data);
            });
        
    }

    handleChange() {
        //const data = event.
        debugger;
        let data = Object.assign({}, this.state.newLanguage);
        data[event.target.name] = event.target.value;
        this.setState({
            newLanguage: data
        })
        
    }

    componentDidMount() {
        $('.ui.button.address')
            .popup();
    }

    openAdd() {
        this.setState({
            newLanguage: {
                name: "",
                level: ""
            },
            showAdd: true
        })
    }

    closeAdd() {
        this.setState({
            showAdd: false
        })
    }

    openEdit() {
        this.setState({
            showEdit: true
        })
    }

    closeEdit() {
        this.setState({
            showEdit: false
        })
    }

    renderDisplay() {

        return (
            <div className='ui sixteen wide column'>
                <table className="ui single line table">
                    <thead>
                        <tr><th>Language</th>
                            <th>Level</th>
                            <th>
                                <button type="button" className="ui right floated teal button" onClick={this.openAdd}><i className="add icon"></i>Add New</button>
                            </th>
                        </tr></thead>


                    <tbody>
                        {this.renderLanguageWithOrWithoutData()}

                    </tbody>


                </table>
            </div>
        )
    }

    renderAdd() {
        let showEdit = this.state.showEdit;
        const options = ["Basic",
            "Conversational",
            "Fluent",
            "Native",
            "Bilingual"];
        let language = this.state.newLanguage;
        const languageLevelOptions = options.map((x) => <option key={x} value={x}>{x}</option>);

        return (
            <div className='ui grid'>
                <div className="five wide column">
                    <input
                        name="name"
                        //{this.state.newAddressData.number}
                        onChange={this.handleChange}
                        maxLength={20}
                        placeholder="Language Name"
                        value={language.name}
                    />
                </div>
                <div className="five wide column">
                    <select
                        name="level"
                        value={language.level}
                        onChange={this.handleChange}
                    >
                        <option value="0">Language Level</option>
                        {languageLevelOptions}
                    </select>
                </div>
                <div className="six wide column">

                    <button type="button" className="ui teal button" onClick={this.addLanguage}>Add</button>
                    <button type="button" className="ui button" onClick={this.closeAdd}>Cancel</button>
                </div>

                {this.renderDisplay()}

            </div>

        )
    }

    renderLanguageWithOrWithoutData() {
        let languages = this.props.languageData;
        return (
            languages[0]
                ?
                languages.map(language => < LanguageData openEdit={this.openEdit} showEdit={this.state.showEdit} closeEdit={this.closeEdit} language={language} />) 
                :
                <tr></tr>
            )
    }

    render() {

        return (
            this.state.showAdd ? this.renderAdd() : this.renderDisplay()
            )
    }
}


class LanguageData extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let showEdit = this.props.showEdit;
        let language = this.props.language;

        return (
            showEdit ?
                <tr>
                <td><input value={language.language} /></td>
                <td><input value={language.languageLevel} /></td>
                <td>
                    <button className="ui blue basic button" onClick={() => this.props.updateProfileData(language)}>Update</button>
                    <button className="ui red basic button" onClick={this.props.closeEdit}>Cancel</button></td>
            </tr>
                :
                <tr>
                    <td>{language.language}</td>
                    <td>{language.languageLevel}</td>
                    <td>
                        <Button icon className="ui right floated button" onClick={() => this.props.deleteLanguage(language)}>
                        <Icon name='close' />
                        </Button>
                        <Button icon className="ui right floated button" onClick={this.props.openEdit}>
                        <Icon name='pencil' />
                    </Button>
                </td>
            </tr>
            )
    }
}
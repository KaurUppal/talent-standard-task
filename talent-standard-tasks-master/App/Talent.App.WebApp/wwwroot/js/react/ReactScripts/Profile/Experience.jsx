/* Experience section */
import React from 'react';
import Cookies from 'js-cookie';
import { Button, Icon } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import moment from 'moment';

export default class Experience extends React.Component {
    constructor(props) {
        const experienceData = [{
            id: 1,
            company: "abc",
            position: "abc",
            responsibilities: "",
            start: Date.now,
            end: Date.now
        },
            {
                id: 2,
                company: "abc",
                position: "abc",
                responsibilities: "",
                start: Date.now,
                end: Date.now
            }
        ];
            //props.experienceData;
        super(props);
        this.state = {
            showEdit: false,
            showAdd: false,
            experience: experienceData,
            newExperience: {
                company: "",
                position: "",
                responsibilities: "",
                start: Date.now,
                end: Date.now
            },
            id:0
        };
        this.closeAdd = this.closeAdd.bind(this);
        this.openAdd = this.openAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
        this.openEdit = this.openEdit.bind(this);
        this.updateExperience = this.updateExperience.bind(this);
        this.addExperience = this.addExperience.bind(this);
    
    };

    componentDidMount() {
        $('.ui.button.address')
            .popup();
    }
    handleChange() {

    }

    handleChangeDate() {

    }

    openAdd() {
        this.setState({
            showAdd: true
        })
    }

    closeAdd() {
        this.setState({
            showAdd: false
        })
    }

    openEdit(id) {

        this.setState({
            showEdit: true,
            id: id
        })
    }

    closeEdit() {
        this.setState({
            showEdit: false
        })
    }

    updateExperience() {

    }

    addExperience() {

    }

    deleteExperience() {

    }

   

    renderAdd() {
        let experience = this.state.newExperience;
       
        return (<div>
            <AddEditExperience
                handleChange={this.handleChange}
                handleChangeDate={this.handleChangeDate}
                experience={experience}
                buttonText="Save"
                addExperience={this.addExperience}
                closeEdit={this.closeAdd}
            />
            <br></br>
            {this.renderDisplay()}

        </div>)
    };

    renderDisplay() {
        let experience = this.state.experience;
        return (
            <div className='ui sixteen wide column'>
                <table className='ui single line table'>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Responsibilities</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>
                                <button type="button" className="ui right floated teal button" onClick={this.openAdd}><i className="add icon"></i>Add<br></br>New</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {experience[0] ?
                        experience.map(experience => <ExperienceData key={experience.id} experience={experience} closeEdit={this.closeEdit} openEdit={this.openEdit}
                            updateExperience={this.updateExperience} deleteExperience={this.deleteExperience} handleChangeDate={this.handleChangeDate}
                                handleChange={this.handleChange} showEdit={this.state.showEdit} id={this.state.id}
                            />) : <tr></tr>}
                    </tbody> 
                    
                </table>
            </div>)
    }

    renderWithOrWithoutData() {
        let experience = this.state.experience;
       
        return (
           // experience[0] ?
                
                experience.map(experience => <ExperienceData key={experience.id} experience={experience} closeEdit={this.closeEdit} openEdit={this.openEdit}
                    updateExperience={this.updateExperience} deleteExperience={this.deleteExperience} handleChangeDate={this.handleChangeDate}
                        handleChange={this.handleChange} showEdit={this.state.showEdit} id={this.state.id}
                />)
            //: <tbody><tr></ tr></tbody>
            )
    }


    render() {    
        return (
            this.state.showAdd ? this.renderAdd() : this.renderDisplay()
        )
    }
}

class ExperienceData extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let showEdit = this.props.showEdit;
        let experience = this.props.experience;
        let id = this.props.id;
       
            
        return (
            showEdit && (experience.id==id) ?
                <tr><td colSpan="6">
                    <AddEditExperience
                        handleChange={this.props.handleChange}
                        handleChangeDate={this.props.handleChangeDate}
                        buttonText="Update"
                        experience={experience}
                        addExperience={this.props.updateExperience}
                        closeEdit={this.props.closeEdit}
                    />
                    </td>
                </tr>
                :
                <tr>
                    <td>{experience.company}</td>
                    <td>{experience.position}</td>
                    <td>{experience.responsibilities}</td>
                    <td>{experience.start}</td>
                    <td>{experience.end}</td>
                    <td>
                        <Button icon className="ui right floated button" onClick={() => this.props.deleteExperience(experience)}>
                            <Icon name='close' />
                        </Button>
                        <Button icon className="ui right floated button" onClick={() => this.props.openEdit(experience.id)}>
                            <Icon name='pencil' />
                        </Button>
                    </td>
                </tr>
        )
    }
}

class AddEditExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let experience = this.props.experience;
        return (<div className='ui grid'>
            <div className='eight wide column'>
                <ChildSingleInput
                    inputType="text"
                    label="Company"
                    name="company"
                    value={experience.company}
                    controlFunc={this.props.handleChange}
                    maxLength={20}
                    placeholder="Company"
                    errorMessage="Please enter a valid Company name"
                />
            </div>
            <div className='eight wide column'>
                <ChildSingleInput
                    inputType="text"
                    label="Position"
                    name="position"
                    value={experience.position}
                    controlFunc={this.props.handleChange}
                    maxLength={20}
                    placeholder="Position"
                    errorMessage="Please enter the valid position"
                />
            </div>
            <div className='eight wide column'>
                <div className='field'>
                    <label>Start Date:</label>
                    <DatePicker
                        selected={experience.startDate}
                        onChange={(date) => this.props.handleChangeDate(date, "startDate")}
                        minDate={moment()}
                    />
                </div>
            </div>
            <div className='eight wide column'>
                <div className='field'>
                    <label>End Date:</label>
                    <DatePicker
                        selected={experience.endDate}
                        onChange={(date) => this.props.handleChangeDate(date, "endDate")}
                        minDate={moment()}
                    />
                </div>
            </div>
            <div className='sixteen wide column'>
                <ChildSingleInput
                    inputType="text"
                    label="Responsibilities"
                    name="responsibilities"
                    value={experience.responsibilities}
                    controlFunc={this.props.handleChange}
                    maxLength={200}
                    placeholder="Responsibilities"
                    errorMessage="not valid Responsibilities"
                />
            </div>
            <div className="four wide column">
                <button type="button" className="ui teal button" onClick={() => this.props.addExperience(experience)}>{this.props.buttonText}</button>
                <button type="button" className="ui button" onClick={this.props.closeEdit}>Cancel</button>
            </div>
        </div>)
    }

}


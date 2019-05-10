/* Skill section */
import React from 'react';
import Cookies from 'js-cookie';
import { Button, Icon } from 'semantic-ui-react';

export default class Skill extends React.Component {
    constructor(props) {
        super(props);
        const skillData = props.skillData ? Object.assign({}, props.skillData) :
            [
                {
                    name: "",
                    level:""
                }
            ];
        this.state = {
            showAdd: false,
            showEdit: false,
            skills: skillData
        }
        this.closeAdd = this.closeAdd.bind(this);
        this.openAdd = this.openAdd.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.addSkill = this.addSkill.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
        this.openEdit = this.openEdit.bind(this);
    };

  
    componentDidMount() {
        $('.ui.button.address')
            .popup();
    }

    addSkill() {

    }

    deleteSkill(skill) {

    }

    handleChange() {

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

    renderAdd() {

        let showEdit = this.state.showEdit;
        const options = ["Beginner",
            "Intermediate",
            "Expert"
        ];

        const skillLevelOptions = options.map((x) => <option key={x} value={x}>{x}</option>);

        return (
            <div className='ui grid'>
                <div className="five wide column">
                    <input
                        name="skill"
                        //{this.state.newAddressData.number}
                        onChange={this.handleChange}
                        maxLength={20}
                        placeholder="Skill Name"
                    />
                </div>
                <div className="five wide column">
                    <select
                        name="skillLevel"
                    >
                        <option value="0">Skill Level</option>
                        {skillLevelOptions}
                    </select>
                </div>
                <div className="six wide column">

                    <button type="button" className="ui teal button" onClick={this.addSkill}>Add</button>
                    <button type="button" className="ui button" onClick={this.closeAdd}>Cancel</button>
                </div>

                {this.renderDisplay()}

            </div>

        )
    }

    renderEdit() {

        return (<div></div>)
    };

    renderDisplay() {

        return (<div className='ui sixteen wide column'>
            <table className="ui single line table">
                <thead>
                    <tr><th>Skill</th>
                        <th>Level</th>
                        <th>
                            <button type="button" className="ui right floated teal button" onClick={this.openAdd}><i className="add icon"></i>Add New</button>
                        </th>
                    </tr></thead>


                <tbody>
                    {this.renderSkillWithOrWithoutData()}

                </tbody>


            </table>
        </div>)
    }

    renderSkillWithOrWithoutData() {
        return (
            this.state.skills.name
                ?
                <SkillData openEdit={this.openEdit} showEdit={this.state.showEdit} closeEdit={this.closeEdit} />
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


class SkillData extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let showEdit = this.props.showEdit;
        let skill = this.props.skill;

        return (
            showEdit ?
                <tr>
                    <td><input value={skill.skill} /></td>
                    <td><input value={skill.skillLevel} /></td>
                    <td>
                        <button className="ui blue basic button" onClick={() => this.props.updateSkillData(skill)}>Update</button>
                        <button className="ui red basic button" onClick={this.props.closeEdit}>Cancel</button></td>
                </tr>
                :
                <tr>
                    <td>Data</td>
                    <td>data</td>
                    <td>
                        <Button icon className="ui right floated button" onClick={() => this.props.deleteSkill(skill)}>
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


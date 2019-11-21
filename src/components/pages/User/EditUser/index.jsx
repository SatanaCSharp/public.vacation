import React, { Component} from "react";
import { connect } from "react-redux";
import { Inputs } from "../../..";
import Modal  from "../../../portals/modals/Modal"


class EditUser extends Component {
    state = {
        userId: '',
        firstName: '',
        lastName: '',
        email: '',
        hiredDate: '',
    }
    initUserState(user) {
        const {_id, firstName, lastName, email, hiredDate } = user;
        this.setState({
            userId: _id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            hiredDate: new Date(hiredDate),
        });
    }
    handleInputChange = ({target: {name, value } }) => {
        this.setState({
            [name]: value
        });
    };
    handleInputDateChange=(date)=>{
        this.setState({
            hiredDate: date
        })
    }
    handleOnClose = ()=>{
        console.log("On close");
    }
    handleButtonClick = () => {
        console.log("Click Works");
    }
    componentDidMount() {
        if(Object.keys(this.props.user).length) {
            this.initUserState(this.props.user);
            console.log("Loaded User: ", this.props);
        }
    }

    render () {
        const props = this.state;
        console.log("Props: ", this.props);
        return(
            <Modal
            title="Edit personal detail"
            isOpen={this.props.isOpen}
            onClose={this.handleOnClose}
            >
                <section className="user-edit">
                        <Inputs.EditUserInputGroup
                            props={props}
                            handleInputChange={this.handleInputChange}
                            handleButtonClick={this.handleButtonClick}
                            handleInputDateChange={this.handleInputDateChange}
                        />
                </section>
            </Modal>

        )
    }
}
const mapStateToProps = (state) =>({
    user: state.user
});
export default connect(mapStateToProps)(EditUser);
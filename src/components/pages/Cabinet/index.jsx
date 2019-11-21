import React, { Component } from 'react';
import UserEdit from "../User/EditUser";
import { connect } from "react-redux";
import { userPending } from "../../../actions/userActionCreator";
import { UserInfoBlock, VacationListBlock } from "../../";
import { getUserData } from '../../../services/localStorageService';
import "./cabinet.scss";
class Cabinet extends Component {
    state = {
        isOpenUserEdit: false
    }
    componentDidMount() {
        const { user } = this.props;
        if(!Object.keys(user).length) {
            const userData = getUserData();
            this.props.dispatch(userPending(userData));
        }
    }
    handleEditUserButtonClick = () =>{
        this.setState({
            isOpenUserEdit: !this.state.isOpenUserEdit
        });
    }
    render() {
        const {user} = this.props;
        const vacations = [];
        return (
            <>
            <UserEdit userInfo={ user } isOpen={this.state.isOpenUserEdit}/>
            <section className="cabinet">
                <section className="container">
                    <UserInfoBlock props={user} handleEditUserButtonClick={this.handleEditUserButtonClick}/>
                    <VacationListBlock vacations={vacations}/>
                </section>
            </section>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps)(Cabinet);
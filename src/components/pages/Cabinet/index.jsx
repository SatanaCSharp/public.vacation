import React, { Component } from 'react';
import UserEdit from "../User/EditUser";
import { connect } from "react-redux";
import { userPending } from "../../../actions/userActionCreator";
import { UserInfoBlock, VacationListBlock } from "../../";
import { getUserData } from '../../../services/localStorageService';
import { LoadingHOC } from '../../hoc';
import "./cabinet.scss";

class CabinetBlock extends Component {

    render() {
        const vacations = [];
        return (
            <>
            <UserEdit
            isOpen={this.props.isOpenUserEdit}
            onClose={this.props.handleIsOpenModalClick}
            />
            <section className="cabinet">
                <section className="container">
                    <UserInfoBlock props={this.props.user} handleEditUserButtonClick={this.props.handleIsOpenModalClick}/>
                    <VacationListBlock vacations={vacations}/>
                </section>
            </section>
            </>
        )
    }
}
const CabinetUI = LoadingHOC('user')(CabinetBlock);

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
    handleIsOpenModalClick = () =>{
        this.setState({
            isOpenUserEdit: !this.state.isOpenUserEdit
        });
    }
    render() {
        const {user} = this.props;
        return (
            <CabinetUI
            user={user}
            isOpenUserEdit={this.state.isOpenUserEdit}
            handleIsOpenModalClick={this.handleIsOpenModalClick}
            />
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps)(Cabinet);
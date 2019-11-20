import React, { Component } from 'react';
import { connect } from "react-redux";
import { userPending } from "../../../actions/userActionCreator";
import { UserInfoBlock, VacationListBlock } from "../../";
import { getUserData } from '../../../services/localStorageService';
import "./cabinet.scss";
class Cabinet extends Component {
    componentDidMount() {
        const { user } = this.props;
        if(!Object.keys(user).length) {
            const userData = getUserData();
            this.props.dispatch(userPending(userData));
        }
    }
    render() {
        const {user} = this.props;
        const vacations = [];
        return (
            <section className="cabinet">
                <section className="container">
                    <UserInfoBlock props={user}/>
                    <VacationListBlock vacations={vacations}/>
                </section>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps)(Cabinet);
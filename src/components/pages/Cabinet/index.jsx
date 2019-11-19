import React, { Component } from 'react';
import { connect } from "react-redux";
import { userPending } from "../../../actions/userActionCreator";
import { UserInfoBlock, VacationListBlock } from "../../";
import "./cabinet.scss";
class Cabinet extends Component {
    getTokenAndId() {
        return {
            userId: localStorage.getItem("userId"),
            token: localStorage.getItem("token")
        }
    }
    componentDidMount() {
        const userTokenAndId = this.getTokenAndId();
        this.props.dispatch(userPending(userTokenAndId));
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
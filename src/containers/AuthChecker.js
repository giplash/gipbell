import React from 'react';
import * as actionCreators from '../actions';
import { connect } from 'react-redux';
import Loader from '../components/Loader';
import PushManager from "../managers/PushManager";

class AuthChecker extends React.Component {

    componentDidMount() {
        this.props.checkAuth();
        PushManager.init();
    }

    componentDidUpdate() {
        if (this.props.isAwaitingResponse) {
            return;
        }
        if (this.props.isAuthorized) {
            this.props.onAuthorized();
        } else {
            this.props.onNotAuthorized();
        }
    }

    render() {
        return <Loader/>;
    }
}

const mapStateToProps = state => state.user;

export default connect(
    mapStateToProps,
    actionCreators,
)(AuthChecker);

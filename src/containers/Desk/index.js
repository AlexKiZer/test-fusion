import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { default as st } from "./style";
import * as deskActions from "../../actions/deskActions";

import BordsList from "../../components/BordsList";
import BoardPage from "../../components/BoardPage";

class Desk extends Component {
    componentDidMount() {
        this.props.deskActions.getStorage();
    }
    render() {
        const { desk } = this.props.mainStore,
            { addBoard, removeBoard } = this.props.deskActions;

        return (
            <div className={st}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => (
                            <BordsList
                                list={desk}
                                addBoard={addBoard}
                                removeBoard={removeBoard}
                            />
                        )}
                    />
                    <Route
                        path="/board/:id"
                        component={(props) => (
                            <BoardPage {...props} data={desk} />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

function mapStateToProps({ mainStore }) {
    return { mainStore };
}

function mapDispatchToProps(dispatch) {
    return {
        deskActions: bindActionCreators(deskActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Desk);

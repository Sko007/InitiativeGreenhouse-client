import React, { Component } from "react";
import { connect } from "react-redux";
import { treeCalculation } from "../Actions/calculation";
import { getTreeSpace } from "../Actions/treespace";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Logo from "../Css/statics/treelogo.jpeg";
import Card from "../Components/sub-components/Card";
import Snackbar from "./sub-components/Snackbar"
import "../Css/QuestionContainer.css";

class CalculationContainer extends Component {
  componentDidMount() {
    this.props.treeCalculation(this.props.match.params.userId);
    this.props.getTreeSpace();
  }

  render() {
    console.log("check calculation", this.props.calculation);
    if (!this.props.calculation) {
      return "loading";
    }
    if (this.props.payment) {
      if (this.props.payment.body.success.captured === true)
        return <Redirect to={`/success`} />;
    }

    return (
      <div className="container">
        <React.Fragment>
          <div className="header">
            <CssBaseline />
            <AppBar color="inherit">
              <div
                style={{
                  marginLeft: 30,
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <Link to="/questions">
                  <img
                    src={Logo}
                    style={{
                      height: 40,
                      width: 40,
                      marginTop: 3,
                      marginRight: 5
                    }}
                  ></img>
                </Link>
                <h4>Initiative Greenhouse</h4>
              </div>
            </AppBar>
          </div>

          <div className="image-wrapper">
            <div className="form-wrapper1">
              <h1 className="head-line">
                You need to plant {this.props.calculation.treesNeeded} trees in
                order to neutrelize your lifestyle.
                <p>
                  However we have {this.props.treespace} Tree-spaces available.
                </p>
              </h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <Card
                  className="detailed-card"
                  treeNumber={this.props.calculation.treesNeeded}
                ></Card>
                <Card treeNumber={40}></Card>
                <Card treeNumber={80}></Card>
              </div>
            </div>
            <React.Fragment>
              <CssBaseline />
              <div className="container1">
                <Container component="div" className="sub-div" />
              </div>
            </React.Fragment>
          </div>
        </React.Fragment>
        {this.props.error && <Snackbar error={this.props.error} />}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("calculation in mapstate to props", reduxState.error);
  return {
    calculation: reduxState.calculation,
    payment: reduxState.payment,
    treespace: reduxState.treespace1,
    error: reduxState.error
  };
}

export default connect(mapStateToProps, { treeCalculation, getTreeSpace })(
  CalculationContainer
);

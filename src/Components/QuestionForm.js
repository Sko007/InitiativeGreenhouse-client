import React, { Component } from "react";
import { connect } from "react-redux";
import { postAnswers } from "../Actions/answer";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Snackbar from "./sub-components/Snackbar";
import { clearError } from "../Actions/answer";
import {
  calculationKwh,
  calculationMeat,
  calculationWater,
  calculationGasoline
} from "../Actions/average";

import "../Css/QuestionForm.css";

class QuestionForm extends Component {
  state = {
    name: "",
    kwh: "",
    meat: "",
    water: "",
    gasoline: ""
  };

  componentDidMount() {
    this.props.calculationKwh();
    this.props.calculationMeat();
    this.props.calculationWater();
    this.props.calculationGasoline();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.postAnswers(this.state);
    this.props.clearError();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log("this.state.answer", this.state.answer);

    console.log("average", this.props.averageKwh);
    if (this.props.user) {
      const { id } = this.props.user;
      return <Redirect to={`/result/${id}`} />;
    } else {
      return (
        <div className="outside-container">
          <div className="container-wrapper">
            <h1 style={{ borderBottom: "1px solid white" }}>
              Trees decrease CO2! How many trees are needed to neutralize your
              Lifestyle?
            </h1>
            <div className="button-container">
              <Button
                size="small"
                style={{ color: "black" }}
                onClick={() => {
                  this.setState({ kwh: Math.floor(this.props.averageKwh) });
                }}
              >
                Electricity in Kwh-Average
              </Button>

              <Button
                size="small"
                onClick={() => {
                  this.setState({
                    meat: Math.floor(this.props.averageMeat)
                  });
                }}
              >
                Meat in Kg-Average
              </Button>
              <Button
                size="small"
                onClick={() => {
                  this.setState({
                    water: Math.floor(this.props.averageWater)
                  });
                }}
              >
                Water in L-Average
              </Button>
              <Button
                size="small"
                onClick={() => {
                  this.setState({
                    gasoline: Math.floor(this.props.averageGasoline)
                  });
                }}
              >
                Gasoline in L-Average
              </Button>
            </div>
            <form
              onSubmit={this.handleSubmit}
              type="submit"
              className="form-container"
            >
              <br />
              <br />

              <TextField
                style={{ borderBottom: "1px solid black" }}
                variant="outlined"
                name="name"
                label="Your Name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              ></TextField>

              <br />
              <br />

              <TextField
                style={{ borderBottom: "1px solid black" }}
                variant="outlined"
                name="kwh"
                label="Electricity/Month in KwH"
                type="text"
                value={this.state.kwh}
                onChange={this.handleChange}
              ></TextField>
              <br />
              <br />

              <TextField
                style={{ borderBottom: "1px solid black" }}
                variant="outlined"
                name="meat"
                label="Meat/Month in KG"
                type="text"
                onChange={this.handleChange}
                value={this.state.meat}
              ></TextField>
              <br />

              <br />

              <TextField
                style={{ borderBottom: "1px solid black" }}
                variant="outlined"
                name="water"
                label="Water/Month in L"
                type="text"
                value={this.state.water}
                onChange={this.handleChange}
              ></TextField>
              <br />
              <br />

              <TextField
                style={{ borderBottom: "1px solid black", color: "black" }}
                variant="outlined"
                name="gasoline"
                label="Gasoline/Month in L"
                type="text"
                value={this.state.gasoline}
                onChange={this.handleChange}
              ></TextField>

              <br />
              <br />

              <Button
                type="submit"
                variant="contained"
                endIcon={<Icon>send</Icon>}
              >
                Send
              </Button>

            </form>
            {this.props.error && <Snackbar error={this.props.error} />}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  console.log("get error in mapstateToProps", reduxState.error);
  return {
    user: reduxState.user,
    error: reduxState.error,
    averageKwh: reduxState.averageKwh,
    averageWater: reduxState.averageWater,
    averageMeat: reduxState.averageMeat,
    averageGasoline: reduxState.averageGasoline
  };
};

export default connect(mapStateToProps, {
  postAnswers,
  clearError,
  calculationKwh,
  calculationMeat,
  calculationWater,
  calculationGasoline
})(QuestionForm);

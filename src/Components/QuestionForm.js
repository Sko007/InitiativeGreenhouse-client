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
    answer: "",
    answer1: "",
    answer2: "",
    answer3: ""
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
                  this.setState({ answer: Math.floor(this.props.averageKwh) });
                }}
              >
                Electricity in Kwh-Average
              </Button>

              <Button
                size="small"
                onClick={() => {
                  this.setState({
                    answer1: Math.floor(this.props.averageMeat)
                  });
                }}
              >
                Meat in Kg-Average
              </Button>
              <Button
                size="small"
                onClick={() => {
                  this.setState({
                    answer2: Math.floor(this.props.averageWater)
                  });
                }}
              >
                Water in L-Average
              </Button>
              <Button
                size="small"
                onClick={() => {
                  this.setState({
                    answer3: Math.floor(this.props.averageGasoline)
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
                name="answer"
                label="Electricity/Month in KwH"
                type="text"
                value={this.state.answer}
                onChange={this.handleChange}
              ></TextField>
              <br />
              <br />

              <TextField
                style={{ borderBottom: "1px solid black" }}
                variant="outlined"
                name="answer1"
                label="Meat/Month in KG"
                type="text"
                onChange={this.handleChange}
                value={this.state.answer1}
              ></TextField>
              <br />

              <br />

              <TextField
                style={{ borderBottom: "1px solid black" }}
                variant="outlined"
                name="answer2"
                label="Water/Month in L"
                type="text"
                value={this.state.answer2}
                onChange={this.handleChange}
              ></TextField>
              <br />
              <br />

              <TextField
                style={{ borderBottom: "1px solid black", color: "black" }}
                variant="outlined"
                name="answer3"
                label="Gasoline/Month in L"
                type="text"
                value={this.state.answer3}
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

              <button>check your comsumption</button>
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

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import QuestionForm from "../QuestionForm";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../Css/statics/treelogo.jpeg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    opacity: 0.5,
    Color: "black",
    padding: 0
  },
  menuButton: {
    marginRight: theme.spacing(0)
  },
  title: {}
}));

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
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
            <img
              src={Logo}
              style={{ height: 40, width: 40, marginTop: 3, marginRight: 5 }}
            ></img>
            <h4>Initiative Greenhouse</h4>
          </div>
        </AppBar>
      </div>

      <div className="image-wrapper">
        <div className="form-wrapper">
          <QuestionForm />
        </div>
      </div>
    </React.Fragment>
  );
}

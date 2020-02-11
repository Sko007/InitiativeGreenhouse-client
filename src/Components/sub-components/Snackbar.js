import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import { useState, useEffect } from "react";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

export default function DirectionSnackbar(props) {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = Transition => () => {
    setTransition(() => Transition);
    setOpen(true);
  };


  useEffect(
    TransitionUp => {
      if (props.error) {
        console.log("does it gets fired");
        setTransition(() => TransitionUp);
        setOpen(true);
      }
    },
    [transition]
  );

  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message={props.error}
      />
    </div>
  );
}

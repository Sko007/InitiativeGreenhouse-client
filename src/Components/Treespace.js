import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!props.treespace) {
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          You want to provide TreeSpace?
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Submission</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please insert your Contact-information if you want to provide
              Space for Trees, that we can get in touch with you.
            </DialogContentText>

            <TextField
              variant="outlined"
              required
              fullWidth
              name="fullName"
              label="What is your Name"
              type="text"
              value={props.fullName}
              onChange={e => props.onChange(e, "FullName")}
            />
            <br />
            <br />

            <TextField
              variant="outlined"
              required
              fullWidth
              name="Contact"
              label="What is your phonenumber"
              type="text"
              value={props.Contact}
              onChange={e => props.onChange(e, "Contact")}
            />
            <br />
            <br />

            <TextField
              variant="outlined"
              required
              fullWidth
              name="AreaForTrees"
              label="How much space you have available?"
              type="text"
              value={props.AreaForTrees}
              onChange={e => props.onChange(e, "AreaForTrees")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>

            <Button onClick={props.handleSubmit} color="primary">
              Send Data
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  } else {
    return (
      <div>
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          You want to provide TreeSpace?
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Submission</DialogTitle>
          <DialogContent>
            <Container maxWidth="sm">
              <Typography
                component="div"
                style={{
                  backgroundColor: "white",
                  height: "40vh",
                  width: "50vh"
                }}
              >
                <h1 style={{color:"black"}}>Your Submission was successful</h1>
              </Typography>
            </Container>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import BuyButton from "../sub-components/BuyButton";

import Forest from "../../Css/statics/forest.jpg";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 15
  },
  media: {
    height: 140
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  const price = props.treeNumber;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={Forest} title="Trees" />
        <CardContent style={{ backgroundColor: "rgb(213,214,215)" }}>
          <h2>{props.treeNumber} Trees</h2>
          <Typography variant="body2" color="textSecondary" component="p">
            Beautiful Trees will row overall the world and save the world from
            extremly
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgb(213,214,215)",
          opacity: 0.8
        }}
      >
        <BuyButton price={price} />
      </CardActions>
    </Card>
  );
}

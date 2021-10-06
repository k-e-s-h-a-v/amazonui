import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardHeader, CardMedia } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: "0px",
    boxShadow: "none",
  },
  title: {
    fontSize: 14,
    fontWeight: "900",
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    // height: 0,
    paddingTop: "100%", //'56.25%', // 16:9
    // paddingRight:"10px",
    // height: 100,     
    width: '80%',
    marginLeft: '10%'
  },
  link: {
    fontSize: 13,
    color: "#007185",
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      color: "red",
      textDecoration: "underline",
    },
  },
});

const list = [
  {
    head: "Up to 70% off | Electronics clearance...",
    body: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
  },
  {
    head: "Up to 70% off | Electronics clearance...",
    body: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
  },
  {
    head: "Up to 70% off | Electronics clearance...",
    body: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
  },
  {
    head: "Up to 70% off | Electronics clearance...",
    body: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
  },
  {
    head: "Up to 70% off | Electronics clearance...",
    body: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
  },
  {
    head: "Up to 70% off | Electronics clearance...",
    body: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
  },
  {
    head: "Up to 70% off | Electronics clearance...",
    body: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg",
  },
];

export default function Cards() {
  const classes = useStyles();

  return (
    <Container className="card">
      <Grid container spacing={3}>
        {list.map((content, index) => (
          <Grid item key={index} xs={12} md={6} lg={3}>
            <Card className={classes.root}>
              <CardHeader title={content.head} className={classes.title} />
              <CardMedia
                className={classes.media}
                image={content.body}
                title="image"
              />
              <CardContent>
                <a href="#" className={classes.link}>
                  More
                </a>
              </CardContent>
            </Card>
          </Grid>
        ))}
        ;
      </Grid>
    </Container>
    // </div>
  );
}

import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const pagePackage = {
    backgroundColor: "#222222",
    paddingTop: "50px"
  }
const imgStyle = {
  backgroundColor: "#222222",
  color: "white",
  justifyContent: "center",
  width: "90%",
  paddingTop: "15px",
  paddingLeft: "10%"
}

const fontImage = {
  color: "white",
  fontSize: "40px",
  fontFamily: "cursive"
}

const paragrafStyle = {
  color: "white",
  fontSize: "20px",
  textAlign: "center",
  fontFamily: "cursive"
}

class RajaAmpat extends Component{
  render(){
    return(
      <div style={pagePackage} >
      <Card style={imgStyle}>
        <CardTitle style={fontImage} >Raja Ampat (Papua)</CardTitle>
        <CardImg  src={require(`../assets/raja-ampat-islands.jpg`)}  alt="Card image cap" />
        <CardBody>
          <p style={paragrafStyle}>Far from the view-blocking skyscrapers, dense and hectic concrete jungles, congested traffics, flickering electric billboards, endless annoying noises, and all the nuisances of modern cities, you will find a pristine paradise where Mother Nature and warm friendly people welcome you with all the exceptional wonders in Raja Ampat, the islands-regency in West Papua Province. With all the spectacular wonders above and beyond its waters, as well as on land and amidst the thick jungles, this is truly the place where words such as beautiful, enchanting, magnificent, and fascinating gets its true physical meaning.</p>
          <CardSubtitle>Schedule :</CardSubtitle>
          <CardText>10 - 15 Desember 2018</CardText>
          <CardSubtitle>Price :</CardSubtitle>
          <CardText>$ 2000 / person </CardText>
           <Button outline color="info" block>Book Now</Button>{' '}

        </CardBody>
      </Card>
    </div>
  )};
}
export default RajaAmpat

import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


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

class OraBeachPackageBody extends Component{
  render(){
    return(
      <div>
      <Card style={imgStyle}>
        <CardTitle style={fontImage} >Ora Beach (Maluku)</CardTitle>
        <CardImg  src={require(`../assets/Pantai-Ora.jpg`)}  alt="Card image cap" />
        <CardBody>
          <p style={paragrafStyle}>Ora Beach Resort is located between scenic highlight,Teluk Sawai – a beautiful wide bay dramatically backed by cliffs and rugged, forested peaks and Saleman village – famed for flocks of bat-like Lusiala birds which emerge at dusk from a cave above the village, supposedly bearing the souls of human ancestors.</p>
          <CardSubtitle>Schedule :</CardSubtitle>
          <CardText>1 - 5 Desember 2018</CardText>
          <CardSubtitle>Price :</CardSubtitle>
          <CardText>$ 1500 / person </CardText>
           <Button outline color="info" block>Book Now</Button>{' '}
        </CardBody>
      </Card>
    </div>
  )};
}
export default OraBeachPackageBody

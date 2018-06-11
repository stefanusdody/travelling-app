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

class DerawanPackageBody extends Component{
  render(){
    return(
      <div>
      <Card style={imgStyle}>
        <CardTitle style={fontImage} >Derawan Islands (Maluku)</CardTitle>
        <CardImg  src={require(`../assets/derawan.jpg`)}  alt="Card image cap" />
        <CardBody>
          <p style={paragrafStyle}>Beaches always offer a refreshing nuance and beautiful views to travelers. Not only it becomes a place to relax, but it becomes the destination for numerous water sports like diving and swimming. For those visiting Derawan Islands, they should drop by in Derawan Beach. As the name implies, it is located in Derawan Island and it becomes a recommended tourist spot in such region. What can tourists do there, actually? Well, the beach is famous for its underwater beauty so it is suitable for diving and snorkeling. Not to mention it features pristine nature!</p>
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
export default DerawanPackageBody

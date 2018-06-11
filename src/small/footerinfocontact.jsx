import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button,
         CardImg,
         Modal,
         ModalHeader,
         ModalBody,
         ModalFooter } from 'reactstrap';

const imgStyle = {
    height: "40px",
    width: "40px",
    marginLeft: "30px",
    textAlign: "center"
  }

class FooterInfoContact extends Component{
  constructor(props){
   super(props);
     this.state= {
       modal: false,
     };
     this.toggle = this.toggle.bind(this);
 }

 toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render(){
    return(
      <div className="col-sm-4">
        <h6>Contact Us :</h6>
        <Button outline color="warning" onClick={this.toggle} size="lg">{this.props.buttonLabel} My Contact</Button>{' '}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Time To Travelling</ModalHeader>
          <ModalBody>
          <Link to="https://github.com/stefanusdody" target="_blank">
          <h6><CardImg src={require(`../assets/github.png`)} style={imgStyle} alt="Card image cap"/> : https://github.com/stefanusdody</h6>
          </Link>
          <br/>
          <br/>
          <Link to="https://www.linkedin.com/in/stefanus-dody-kristianto-wicaksono-a4a13672/" target="_blank">
          <h6><CardImg src={require(`../assets/linkedin.png`)} style={imgStyle} alt="Card image cap"/> : https://www.linkedin.com</h6>
          </Link>
          <br/>
          <br/>
          <h6><CardImg src={require(`../assets/email.png`)} style={imgStyle} alt="Card image cap"/> : stefanusdody@yahoo.com</h6>
          <br/>
          <h6><CardImg src={require(`../assets/phone.png`)} style={imgStyle} alt="Card image cap"/> : 087882344987</h6>
          <br/>
          <h6><CardImg src={require(`../assets/whatsapp.png`)} style={imgStyle} alt="Card image cap"/> : 087882344987</h6>
          </ModalBody>
          <ModalFooter>
           <Button color="secondary" onClick={this.toggle}>Back</Button>
         </ModalFooter>
       </Modal>
     </div>
  )};
}
export default FooterInfoContact

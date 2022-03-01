import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }



  
  handleChange = (e) => {
    let { name, direccion,nit, tel, value} = e.target;
    

    const activeItem = { ...this.state.activeItem, [name]: value , [direccion]: direccion,[nit]:nit, [tel]:tel}

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Item</ModalHeader>
        <ModalBody>
          <Form>
          <FormGroup>
              <Label for="list-name">Name</Label>
              <Input
                type="text"
                id="list-name"
                name="name"
                value={this.state.activeItem.name}
                onChange={this.handleChange}
                placeholder="Enter Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="list-direccion">Direction</Label>
              <Input
                type="text"
                id="list-direccion"
                name="direccion"
                value={this.state.activeItem.direccion}
                onChange={this.handleChange}
                placeholder="Enter Direcction"
              />
            </FormGroup>
            <FormGroup>
              <Label for="list-nit">NIT</Label>
              <Input
                type="text"
                id="list-nit"
                name="nit"
                value={this.state.activeItem.nit}
                onChange={this.handleChange}
                placeholder="Enter Nit"
              />
            </FormGroup>
            <FormGroup>
              <Label for="list-tel">Phone-number</Label>
              <Input
                type="text"
                id="list-tel"
                name="tel"
                value={this.state.activeItem.tel}
                onChange={this.handleChange}
                placeholder="Enter Phone-number"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

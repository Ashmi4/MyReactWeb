import React from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap';  
  
class AddProduct extends React.Component {  
  constructor(props) {  
    super(props);  
   
    this.initialState = {  
      P_Id: '',  
      P_Name: '',  
      P_Description: '',  
      P_Active: '',
      C_Id: '',       
    }  
  
    if (props.product.P_Id) {  
      this.state = props.product  
    } else {  
      this.state = this.initialState;  
    }  
  
    this.handleChange = this.handleChange.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  
  }  
  
  handleChange(event) {  
    const name = event.target.name;  
    const value = event.target.value;  
  
    this.setState({  
      [name]: value  
    })  
  }  
 
  handleSubmit(event) {
    //alert(this.state.C_Name)  
    event.preventDefault();  
    this.props.onFormSubmit(this.state);  
    this.setState(this.initialState);  
  }  
  render() {  
    let pageTitle;  
    let actionStatus;  
    if (this.state.P_Id) {  
  
      pageTitle = <h2>Edit Product</h2>  
      actionStatus = <b>Update</b>  
    } else {  
      pageTitle = <h2>Add Product</h2>  
      actionStatus = <b>Save</b>  
    }  
  
   return (  
      <div>        
        <h2> {pageTitle}</h2>  
        <Row>  
          <Col sm={7}>  
            <Form onSubmit={this.handleSubmit}>  
              <Form.Group controlId="P_Name">  
                <Form.Label>Product Name</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="P_Name"  
                  value={this.state.P_Name === null ? '' : this.state.P_Name}  
                  onChange={this.handleChange}  
                  placeholder="Product Name" />  
              </Form.Group>  
              <Form.Group controlId="P_Cost">  
                <Form.Label>Product Cost</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="P_Cost"  
                  value={this.state.P_Cost}  
                  onChange={this.handleChange}  
                  placeholder="Product Cost" />  
              </Form.Group>
              <Form.Group controlId="P_Description">  
                <Form.Label>Product Description</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="P_Description"  
                  value={this.state.P_Description}  
                  onChange={this.handleChange}  
                  placeholder="Product Description" />  
              </Form.Group>  
              <Form.Group controlId="P_Active">  
                <Form.Label>Product Active</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="P_Active"  
                  value={this.state.P_Active}  
                  onChange={this.handleChange}  
                  placeholder="Product Active" />  
              </Form.Group>  
              <Form.Group controlId="C_Id">  
                <Form.Label>Category Name</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="C_Id"  
                  value={this.state.C_Id}  
                  onChange={this.handleChange}  
                  placeholder="Category Name" />  
              </Form.Group>  
              <Form.Group>  
                <Form.Control type="hidden" name="P_Id" value={this.state.P_Id} />  
                <Button variant="success" type="submit">{actionStatus}</Button>            
  
              </Form.Group>  
            </Form>  
          </Col>  
        </Row>  
      </div>  
    )  
    
  }  
}  
  
export default AddProduct;
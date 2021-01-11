import React from 'react';  
import { Row, Form, Col, Button } from 'react-bootstrap';  
  
class AddCategory extends React.Component {  
  constructor(props) {  
    super(props);  
   
    this.initialState = {  
      C_Id: '',  
      C_Name: '',  
      C_Description: '',  
      C_Active: '',       
    }  
  
    if (props.category.C_Id) {  
      this.state = props.category  
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
    if (this.state.C_Id) {  
  
      pageTitle = <h2>Edit Category</h2>  
      actionStatus = <b>Update</b>  
    } else {  
      pageTitle = <h2>Add Category</h2>  
      actionStatus = <b>Save</b>  
    }  
  
   return (  
      <div>        
        <h2> {pageTitle}</h2>  
        <Row>  
          <Col sm={7}>  
            <Form onSubmit={this.handleSubmit}>  
              <Form.Group controlId="C_Name">  
                <Form.Label>Category Name</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="C_Name"  
                  value={this.state.C_Name === null ? '' : this.state.C_Name}  
                  onChange={this.handleChange}  
                  placeholder="Category Name" />  
              </Form.Group>  
              <Form.Group controlId="C_Description">  
                <Form.Label>Category Description</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="C_Description"  
                  value={this.state.C_Description}  
                  onChange={this.handleChange}  
                  placeholder="Category Description" />  
              </Form.Group>  
              <Form.Group controlId="C_Active">  
                <Form.Label>Category Active</Form.Label>  
                <Form.Control  
                  type="text"  
                  name="C_Active"  
                  value={this.state.C_Active}  
                  onChange={this.handleChange}  
                  placeholder="Category Active" />  
              </Form.Group>  
              
              <Form.Group>  
                <Form.Control type="hidden" name="C_Id" value={this.state.C_Id} />  
                <Button variant="success" type="submit">{actionStatus}</Button>            
  
              </Form.Group>  
            </Form>  
          </Col>  
        </Row>  
      </div>  
    )  
    
  }  
}  
  
export default AddCategory;
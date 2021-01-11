import React, { Component } from 'react';  
  
import { Container, Button } from 'react-bootstrap';  
import CategoryList from './GetCategory';  
import AddCategory from './AddCategory';  
import axios from 'axios';  
const apiUrl = 'http://localhost:60350/Api/Shop/';  
  
class UserActionApp extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddCategory: false,  
      error: null,  
      response: {},  
      categoryData: {},  
      isEditcategory: false,  
      isCategoryDetails:true,  
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({ isAddCategory: true });  
    this.setState({ isCategoryDetails: false });  
  }  
  onDetails() {  
    this.setState({ isCategoryDetails: true });  
    this.setState({ isAddCategory: false });  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddCategory: true });  
    this.setState({ isCategoryDetails: false });  
    if (this.state.isEditcategory) {  
     axios.put(apiUrl + 'UpdateCategoryDetails',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddCategory: false,  
          isEditcategory: false  
        })  
      });  
    } else {  
     
     axios.post(apiUrl + 'InsertCategoryDetails',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddCategory: false,  
          isEditcategory: false  
        })  
      });  
    }  
    
  }  
  
  editCategory = C_Id => {  
  
    this.setState({ isCategoryDetails: false });  
   axios.get(apiUrl + "GetCategoryDetailsById/" + C_Id).then(result => {  
  
        this.setState({  
          isEditcategory: true,  
          isAddCategory: true,  
          categoryData: result.data           
        });  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }  
  
  render() {  
    
    let categoryForm;  
    if (this.state.isAddCategory || this.state.isEditcategory) {  
  
      categoryForm = <AddCategory onFormSubmit={this.onFormSubmit} category={this.state.categoryData} />  
       
    }  
    return (  
      <div className="App">  
 <Container>  
        <h1 style={{ textAlign: 'center' }}>ASP.NET/React/SQL</h1>  
        <hr></hr>  
        {!this.state.isCategoryDetails && <Button variant="primary" onClick={() => this.onDetails()}> Category Details</Button>}  
        {!this.state.isAddCategory && <Button variant="primary" onClick={() => this.onCreate()}>Add Category</Button>}  
        <br></br>  
        {!this.state.isAddCategory && <CategoryList editCategory={this.editCategory} />}  
        {categoryForm}  
        </Container>  
      </div>  
    );  
  }  
}  
export default UserActionApp;
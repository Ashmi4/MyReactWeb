import React, { Component } from 'react';  
  
import { Container, Button } from 'react-bootstrap';
import ProductList from './GetProduct';  
import AddProduct from './AddProduct';  
import axios from 'axios';  
const apiUrl = 'http://localhost:51497/Api/Shop/';  
  
class Product extends Component {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isAddProduct: false,  
      error: null,  
      response: {},  
      productData: {},  
      isEditproduct: false,  
      isProductDetails:true,  
    }  
  
    this.onFormSubmit = this.onFormSubmit.bind(this);  
  
  }  
  
  onCreate() {  
    this.setState({ isAddProduct: true });  
    this.setState({ isProductDetails: false });  
  }  
  onDetails() {  
    this.setState({ isProductDetails: true });  
    this.setState({ isAddProduct: false });  
  }  
  
  onFormSubmit(data) {  
    this.setState({ isAddProduct: true });  
    this.setState({ isProductDetails: false });  
    if (this.state.isEditproduct) {  
     axios.put(apiUrl + 'UpdateProductDetails',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddProduct: false,  
          isEditproduct: false  
        })  
      });  
    } else {  
     
     axios.post(apiUrl + 'InsertProductDetails',data).then(result => {  
      alert(result.data);  
        this.setState({  
          response:result,    
          isAddProduct: false,  
          isEditproduct: false  
        })  
      });  
    }  
    
  }  
  
  editProduct = C_Id => {  
  
    this.setState({ isProductDetails: false });  
   axios.get(apiUrl + "GetProductDetailsById/" + C_Id).then(result => {  
  
        this.setState({  
          isEditproduct: true,  
          isAddProduct: true,  
          productData: result.data           
        });  
      },  
      (error) => {  
        this.setState({ error });  
      }  
    )  
     
  }  
  
  render() {  
    
    let productForm;  
    if (this.state.isAddProduct || this.state.isEditproduct) {  
  
      productForm = <AddProduct onFormSubmit={this.onFormSubmit} product={this.state.productData} />  
       
    }  
    return (  
      <div className="App">  
 <Container>  
        
        <div id='hello'></div>
        <hr></hr>  
        {!this.state.isProductDetails && <Button variant="primary" onClick={() => this.onDetails()}> Product Details</Button>}  
        {!this.state.isAddProduct && <Button variant="primary" onClick={() => this.onCreate()}>Add Product</Button>}  
        <br></br>  
        {!this.state.isAddProduct && <ProductList editProduct={this.editProduct} />}  
        {productForm}  
        </Container>  
      </div>  
    );  
  }  
}  
export default Product;
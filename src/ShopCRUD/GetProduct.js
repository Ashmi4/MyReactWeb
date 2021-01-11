import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
  
const apiUrl = 'http://localhost:51497/Api/Shop';  
  
class ProductList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           product:[],  
           response: {}  
              
        }  
    }  
  
    componentDidMount(){  
       axios.get(apiUrl + '/GetProduct').then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                  product:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    deleteProduct(P_Id) {  
      const { product } = this.state;     
     axios.delete(apiUrl + '/DeleteProductDetails/' + P_Id).then(result=>{  
       alert(result.data);  
        this.setState({  
          response:result,  
          product:product.filter(product=>product.P_Id !== P_Id)  
        });  
      });  
    }  
  
    render(){         
        const{error,product}=this.state;  
        if(error){  
            return(  
                <div>Error:{error.message}</div>  
            )  
        }  
        else  
        {  
            return(  
         <div>  
                      
                  <Table>  
                    <thead className="btn-primary">  
                      <tr> 
                      <th>Product ID</th> 
                        <th>Product Name</th> 
                        <th>Product Cost</th> 
                        <th>Product Description</th> 
                        <th>Is Active</th>
                        <th>Action</th> 
                         
                      </tr>  
                    </thead>  
                    <tbody>  
                      {product.map(product => (  
                        <tr key={product.P_Id}>
                        <td>{product.P_Id}</td> 
                        <td>{product.P_Name}</td>  
                        <td>{product.P_Cost}</td>
                          <td>{product.P_Description}</td> 
                          <td>{product.P_Active}</td>                          
                           
                          <td><Button variant="info" onClick={() => this.props.editProduct(product.P_Id)}>Edit</Button>       
                          <Button variant="danger" onClick={() => this.deleteProduct(product.P_Id)}>Delete</Button>  
                          
                          </td>  
                        </tr>  
                      ))}  
                    </tbody>  
                  </Table>  
                </div>  
              )  
        }  
    }  
}  
  
export default ProductList; 
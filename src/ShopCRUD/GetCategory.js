import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
  
const apiUrl = 'http://localhost:60350/Api/Shop';  
  
class CategoryList extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           categories:[],  
           response: {}  
              
        }  
    }  
  
    componentDidMount(){  
       axios.get(apiUrl + '/GetCategory').then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                  categories:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    deleteCategory(C_Id) {  
      const { categories } = this.state;     
     axios.delete(apiUrl + '/DeleteCategoryDetails/' + C_Id).then(result=>{  
       alert(result.data);  
        this.setState({  
          response:result,  
          categories:categories.filter(category=>category.C_Id !== C_Id)  
        });  
      });  
    }  
  
    render(){         
        const{error,categories}=this.state;  
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
                      <th>Category ID</th> 
                        <th>Category Name</th>  
                        <th>Category Description</th> 
                        <th>Is Active</th>
                        <th>Action</th> 
                         
                      </tr>  
                    </thead>  
                    <tbody>  
                      {categories.map(category => (  
                        <tr key={category.C_Id}>
                        <td>{category.C_Id}</td> 
                        <td>{category.C_Name}</td>  
                          <td>{category.C_Description}</td> 
                          <td>{category.C_Active}</td>                          
                           
                          <td><Button variant="info" onClick={() => this.props.editCategory(category.C_Id)}>Edit</Button>       
                          <Button variant="danger" onClick={() => this.deleteCategory(category.C_Id)}>Delete</Button>  
                          
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
  
export default CategoryList; 
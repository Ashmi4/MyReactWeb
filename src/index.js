import React from 'react';  
import ReactDOM from 'react-dom';  
import './index.css';  
import * as serviceWorker from './serviceWorker';  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import UserActionApp from './ShopCRUD/UserActions';
import Product from './ShopCRUD/Product';  
ReactDOM.render(<UserActionApp />, document.getElementById('root'));
ReactDOM.render(<Product />, document.getElementById('hello'))
serviceWorker.unregister(); 

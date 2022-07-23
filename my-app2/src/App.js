import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Product from './components/Product';
import Homepage from './components/Homepage';
import Blogs from './components/Blogs';
import AboutUs from './components/AboutUs';

class App extends Component {
  render() {
    return (
      <div>
          <ul>
            <li><a href='/'>Homepage</a></li>
            <li><a href='/products'>Product</a></li>
            <li><a href='/blogs'>Blogs</a></li>
            <li><a href='/abuotus'>About Us</a></li>
          </ul>

        <div>

          <Route exact path="/" component={Homepage}/>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/products" component={Product}/>
          <Route path="/abuotus" component={AboutUs}/>
          
        </div>
        

      </div>
    );
  }
}

export default App;
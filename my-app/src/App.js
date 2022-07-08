import React ,{Component} from "react";
import Navbar from "./components/Navbar";
import Baner from "./components/Baner";
import Cards from "./components/Cards";
class App extends Component {
  render(){
    return (
      <div>
       <Navbar /> 
       <Baner />
      <Cards />
      </div>
    );
  }
 
}

export default App;

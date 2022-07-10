import React ,{Component} from "react";
import Navbar from "./components/Navbar";
import Baner from "./components/Baner";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Logo from "./components/Logo";
class App extends Component {
  render(){
    return (
      <div>
       <Navbar /> 
       <Baner />
       <Cards />
       <Search />
       <Logo />
      </div>
    );
  }
 
}

export default App;

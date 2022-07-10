import React ,{Component} from "react";
import Navbar from "./components/Navbar";
import Baner from "./components/Baner";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
class App extends Component {
  render(){
    return (
      <div>
       <Navbar /> 
       <Baner />
       <Cards />
       <Search />
       <Logo />
       <Footer />
      </div>
    );
  }
 
}

export default App;

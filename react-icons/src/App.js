import React from "react";
import './App.css';
import { FaReact } from "react-icons/fa";
import {BsFillBarChartFill} from "react-icons/bs"
import {IconContext} from "react-icons"

class App extends React.Component {    
   render() {
      return (
         <div className="App" >
            <IconContext.Provider value={{ color: "#ef6c00", size: '5rem'}}>
                  <h1><a href="https://react-icons.github.io/react-icons" target="new">All the icons at One Place</a></h1>
                  <hr />
                  <h2>React Font Awesome Icon</h2>
                  <FaReact></FaReact>
                  <h2>Bar Chart Bootstrap Icon</h2>
                  <BsFillBarChartFill></BsFillBarChartFill> 
            </IconContext.Provider>
         </div>
      );
   }
}
export default App;
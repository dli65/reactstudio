import logo from './logo.svg';
import './App.css';
import React from "react";
import Namelist from './Namelist.jsx';
import Search from './Search';

export default class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        names: [{text:"Allyson", age:"18"}, 
        {text:"Delora", age:"19"}, 
        {text:"Nathan", age:"20"},
        {text:"Jeffrey", age:"22"},
        {text:"Jefferson", age:"23"},
        {text:"Delolo", age:"18"},
        {text:"Rachel", age:"18"}
      ],
      filtertext : "",
      };
    }

    filterUpdate(value) {
      this.setState({
        filtertext: value
      })
    }

    render() {
      console.log(this.state.filtertext)
        return (
          <div>
            <Search filtertext = {this.state.filtertext} filterUpdate = {this.filterUpdate.bind(this)}></Search>
            <Namelist data = {this.state.names} filtertext = {this.state.filtertext}></Namelist>
          </div>
         );
    }

}



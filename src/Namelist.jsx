import React, {Component} from "react";
import './App.css';

class Namelist extends React.Component {
    render() {
        const {data, filtertext} = this.props;

        const nameslist = data.filter(name =>{
            return name.text.toLowerCase().indexOf(filtertext.toLowerCase()) >= 0
        })
        
        .map(name =>{
            return(
                <div class = "namebox"> <p>{name.text}</p> </div>
            )
        })

        return(
            <div>{nameslist}</div>
        );
    }
}

export default Namelist;
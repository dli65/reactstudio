import React, {Component} from "react";
import './App.css';

class Search extends Component{
    filterUpdate() {
        const val = this.myValue.value
        this.props.filterUpdate(val)
    }
    render(){
        return(
        <header>
            <form>
                <input
                type = "text"
                ref = {(value) => this.myValue = value}
                placeholder = "type to search"
                onChange = {this.filterUpdate.bind(this)}
                />
            </form>
        </header>
        );
    }
}

export default Search;
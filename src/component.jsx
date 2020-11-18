import React from "react";


class component extends React.Component{
    introduce = (name) => {
        return <div class = "namebox"> <p>{name.text}</p> </div>;
      };
  
  
      render() {
          const data = this.props;
          return (
              data.map(this.introduce)
              //<component entries = {this.state.names}></component>
           );
      }
}

export default component;
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    state={
        mesaj:"Sorry! I can't do this"

    }
    render(){
        return(<div>{this.state.mesaj}</div>)
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))

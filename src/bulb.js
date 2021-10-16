import React from "react";
import "./App.css";

const onColor = "#ffbb29";
const offColor = "#ffffff";

export default class Bulb extends React.Component{
    constructor(props){
        super(props);
        this.state = { color: offColor, bulbLife:20};
        this.changeColor= this.changeColor.bind(this);
    }
    changeColor(){
        if (this.state.bulbLife>=1 && this.props.isGlobalSwitchOn){
        const newColor = this.state.color === offColor ? onColor : offColor;
        this.setState({ color: newColor });
        this.setState({bulbLife: this.state.bulbLife-1})
        }
    }
    render(){
        return (
            <div className="bulb" onClick={this.changeColor}
            style={{background: this.props.isGlobalSwitchOn ? this.state.color: offColor}}>
            </div>
        );
    }
}
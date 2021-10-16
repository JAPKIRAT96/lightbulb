import React from "react";
import Bulb from "./bulb";



export default class Controller extends 
React.Component {
constructor(props){
    super(props);
    this.bulbsMap = Array.from(Array(props.numOfBulbs).keys());
    this.state = { isGlobalSwitchOn: false};
    this.switchHandler= this.switchHandler.bind(this);
}
switchHandler(){
    this.setState({ isGlobalSwitchOn: !this.state.isGlobalSwitchOn });
}
render(){
    return (
        <div className='controller'>
        {this.bulbsMap.map(i =>{
            return <Bulb isGlobalSwitchOn={this.state.isGlobalSwitchOn}/>
        })}
        <div className="switch"><button onClick={this.switchHandler}>{this.state.isGlobalSwitchOn ? "ON" : "OFF"}</button></div>
        </div>
        
    );
}
}
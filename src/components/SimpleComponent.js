// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component {
    state = {
        mood: "happy"
    }

    onClickHandler = () => {
        if(this.state.mood === "happy")
            this.setState({mood: "sad"})
        else this.setState({mood: "happy"})
    }

    render(){
        return(
            <div onClick={this.onClickHandler}>{this.state.mood}</div>
        )
    }
}
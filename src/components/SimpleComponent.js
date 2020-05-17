// Code SimpleComponent Here
import React from 'react';
const toogleMood = {'happy': 'sad', 'sad':'happy'}

export default class SimpleComponent extends React.Component {
    state = {
        mood: 'happy'
    }

    handleClick = () => {
        this.setState({
            mood: toogleMood[this.state.mood]
        })
    }

    render() {
        return(
            <div onClick={() => this.handleClick()}>
                {this.state.mood}
            </div>
        )
    }
}
import React from 'react'


class SimpleComponent extends React.Component {
    state = { 
        mood: 'happy'
     }

     handleClick = () => {
         const changeMood = this.state.mood === 'happy' ? 'sad' : 'happy'
         this.setState({
             mood: changeMood
         })
     }

    render() { 
        return (  
            <div style={{color: this.state.mood === 'happy' ? 'goldenrod' : 'cornflowerblue', fontSize: 40 }} onClick={this.handleClick}>{this.state.mood}</div>
        );
    }
}
 
export default SimpleComponent;
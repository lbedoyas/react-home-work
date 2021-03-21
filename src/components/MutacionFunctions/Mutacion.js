import React, { Component } from 'react';

class Contador extends Component {
    state = {
        clicks: 0
    }

    add = () => {
        this.setState((state, props) => {

            if (state.clicks === 3) {
                return null
            }

            return {
                clicks: state.clicks + 1
            }
        })
    }


    render(){
        return(
            <button onClick={this.add}>
                Clicks: ({this.state.clicks})
            </button>
        )
    }
}

export default Contador;
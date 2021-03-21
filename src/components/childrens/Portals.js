import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Portals extends Component{
    render(){
        return ReactDOM.createPortal((
            <div>
                <h1>{this.props.children}</h1>
            </div>
        ),document.getElementById('modal-root'))
    }
}

export default Portals;
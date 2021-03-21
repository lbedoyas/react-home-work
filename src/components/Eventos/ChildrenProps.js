import React, {Component} from 'react';

const Title = (props) => {

    const estilo = {
        padding: '3em'
    }

    const styles = {
        padding: '0.3em',
        color: '#FFF',
        background: props.iuColor,
        borderRadius: '0.3em',
        textAlign: 'center',
        fontSize: '50px'
    }

    return(
        <div style={estilo}>
             <div style={styles}>
                <h1>Ejemplo Children</h1>
                {props.children}
             </div>
        </div>
    )
}


class ChildrenProps extends Component{
    state = {
        uiColor: 'purple'
    }
    render() {
        return(
            <div>
                <Title
                 iuColor={this.state.uiColor}
                  >
                      Super <em>Lucho</em>
                </Title>
            </div>
        )
    }
}

export default ChildrenProps;
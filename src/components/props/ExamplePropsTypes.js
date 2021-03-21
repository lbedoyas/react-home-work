import React, {Component} from 'react';
import PropTypes, { string } from 'prop-types';


const noop = () => {}

class Profile extends Component {

static propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string
}

// props por defecto
static defaultProps = {
    name: 'Lucho',
    onhello: noop
}

saluda = () => {
        this.props.onhello()
}

    render(){
        const {name, bio, email} = this.props;
        return(
            <div>
                <h1>Nombre: {name}</h1>
                <p>
                    {bio}
                </p>
                <a href={`mailto:${email}`}>
                    {email}
                </a>
                <button onClick={this.saluda}>
                    Saluda
                </button>
            </div>
        )
    }
}

class ExamplePropsTypes extends Component{
    render(){
        return(
            <div>
                <Profile
                bio='Soy un desarrollador front'
                email='mail@mail.com' />
            </div>
        )
    }
}

export default ExamplePropsTypes;
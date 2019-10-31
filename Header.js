import React , {Component} from 'react';
import Background from "./image/portfolio.jpeg";
import './Header.css';
const mystyles = {
    background: `url(${Background})`,
    height: '70vh',
    backgroundSize:'cover'
}
class Header extends Component{
    
    render(){
        return(
                <header style={mystyles}>
                <h1>
                {this.props.title}
                </h1>
                <p> This is a Photo Gallery </p>
                <a href='#button'>{this.props.button}</a>

                </header>

        );
    }
};

export default Header;
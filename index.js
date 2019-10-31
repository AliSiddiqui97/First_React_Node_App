import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './Header';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';
import Services from './Services';
import Gallery from './Gallery(1)';
import ContactMe from './ContactMe';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js'; 
import Footer from './Footer';

import Pricing from './Pricing';
import ApiCheck from './apiCheck';


class App extends Component{
    render(){
        return(
            <div>
            <div>
                <Navigation LogoTittle="Portfolio"/>
            </div>
            
            <div> 
               <Header title="PhotoGallery Portfolio" button="Find Out More"/>
            </div>
            
            <div> 
               <Services />
            </div>
            
            <div> 
               <Gallery />
            </div>
            
            <div>    
                <ContactMe />
            </div>
            
            <div> 
               <Pricing /> 
            </div>
            <div>
            <ApiCheck />
            </div>
            <div> 
               <Footer />
            </div>              
                </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();


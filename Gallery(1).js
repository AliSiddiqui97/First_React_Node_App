import React,{Component} from 'react';
import axios from 'axios';
import './Gallery.css';
import ActiveThumbnailWindow from './ActiveThumbnailWindow';
import ThumbnailGrid from './ThumbnailGrid';

class Gallery extends Component{
    componentDidMount(){
        axios.get();
    }

    render(){
        return(
            
            <div className='thumbnailGalleryStyle'>
            
            
            <div className='Left'>
            <ActiveThumbnailWindow />
            <ThumbnailGrid />
            
            </div>

            
            <div className='Right'>Right</div>
            


            </div>
            
        );
    }
}



export default Gallery;
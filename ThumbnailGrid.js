import React,{Component} from 'react';
import './Thumbnail.css';
import './Thumbnail';
import Thumbnail from './Thumbnail';

class ThumbnailGrid extends Component{
    
    render(){
        return(
            <div className='ThumbnailGrid'>
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            </div>
        );
 
    }
}
            
export default ThumbnailGrid;
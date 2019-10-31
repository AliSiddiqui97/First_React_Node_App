import React,  {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
import './ContactMe.css';


class ContactMe extends Component{

    render(){
        return(
            <div className='ContactBody'>
                <Grid className='ContactGrid' >
                <Cell col={6}>
                <h2>Asna Zehra</h2>
                <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{height: '250px'}}
                />
                <p style={{width: '75%',margin: 'auto',paddingTop:'1em'}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur officia incidunt laudantium
                erspiciatis qui tempora, modi, quisquam at illo sequi delectus repudiandae distinctio fugiat consequuntur
                obcaecati numquam ipsam alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolores assumenda non praesentium nesciunt voluptas placeat ex explicabo nobis consectetur?
                 Temporibus, eligendi! Omnis nulla repellat optio enim explicabo. Earum, laborum possimus.
                </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className='Contactlist'>
                    <List>
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className = "fa fa-phone-square" aria-hidden="true"></i>
 
                        0334 1892221</ListItemContent>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className = "fa fa-whatsapp-square" aria-hidden="true"></i>
 
                        0344 3232321</ListItemContent>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className = "fa fa-envelope" aria-hidden="true"></i>
 
                        asnaZ@yahoo.com</ListItemContent>
                    </ListItem>
                    

                    <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fab fa-skype" aria-hidden="true"></i>
                        
                        Azehra</ListItemContent>
                    </ListItem>
                    

                    </List> 
                    
                    </div>
                
                </Cell>
                </Grid>
            </div>       
        );
    }

}



export default ContactMe;
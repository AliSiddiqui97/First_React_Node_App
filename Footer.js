
import React, {Component } from 'react';
import {Footer,FooterSection,FooterLinkList} from 'react-mdl';


class Footerx extends Component{
    render(){
        return(
            <Footer size="mega">
                <FooterSection type="bottom" logo="Title">
                    <FooterLinkList>
                        <a href="#Help">Help</a>
                        <a href="#Privacy">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>


        );

    }

}



export default Footerx;
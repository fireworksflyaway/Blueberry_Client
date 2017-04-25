/**
 * Created by Mason Jackson in Office on 2017/4/24.
 */
import React from 'react';
import {Link} from 'react-router';
import '../style/aside.scss';

import AsidePanel from './asidePanel';
export default class Aside extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
           <aside className="totalaside">
               <Link to="/"><img id="logoImg" src={require("../images/Logo.png")} /></Link>
                <AsidePanel/>
           </aside>
        );
    }
}
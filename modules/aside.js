/**
 * Created by Mason Jackson in Office on 2017/4/24.
 */
import React from 'react';
import '../style/aside.scss';

import AsidePanel from './asidePanel';
export default class Aside extends React.Component{
    constructor(){
        super();
    }

    render(){
        console.log('aside render...');
        return(
           <aside className="col-lg-2 col-md-2 col-sm-1 col-xs-1 totalaside">
               <img id="logoImg" src={require("../images/Logo.png")} />
                <AsidePanel/>
           </aside>
        );
    }
}
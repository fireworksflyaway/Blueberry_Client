/**
 * Created by Mason Jackson @ Fireworks-Dell on 2017/4/22.
 */
/**
 * Created by ImageDBUser on 2017/3/10.
 */
import React from 'react';

import Aside from './aside';

export default class Content extends React.Component{
    constructor(){
        super();

    }

    render(){
        console.log('rendering...');
        return (
            <div>
                <Aside />
            </div>
        );
    }
}
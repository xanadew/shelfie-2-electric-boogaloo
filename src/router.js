import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Dash from './components/Dash/Dash';
import Shelf from './components/Shelf/Shelf';
import Product from './components/Product/Product';
import Create from './components/Create/Create';


export default (
    <Switch>
        <Route exact path='/' component={Dash}/>
        <Route path='/bins/:label' component={Shelf}/>
        <Route path='/bin/:id' component={Product}/>
        <Route path='/create/:id' component={Create}/>
    </Switch>
)
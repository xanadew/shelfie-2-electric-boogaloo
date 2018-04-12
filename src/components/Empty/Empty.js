import React from 'react';
import {Link} from 'react-router-dom';
import './Empty.css';

const Empty = (props) => {

        return (
            <Link to={`/create/${props.id}`}>
            <div className='emptybin'><h2>+ Add to Inventory</h2></div>
            </Link>
        );
    }

export default Empty;
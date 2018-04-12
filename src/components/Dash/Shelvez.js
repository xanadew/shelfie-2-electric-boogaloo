import React from 'react';
import {Link} from 'react-router-dom';
import './Shelvez.css';

const Shelvez = (props) => {
        return props.labels.map((label, i) => {
            return (
                <div className='shelves' key={i}>
                    <Link to={`/bins/${label}`}>
                        <h2>SHELF {label}</h2>
                    </Link>
                </div>
            )
        })
}

export default Shelvez;
import React from 'react';
import {Link} from 'react-router-dom';
import './Bins.css';

const Bins = props => {

        return (
              <Link to={`/bin/${props.id}`} params={{name: props.name, price: props.price}}>
                <div className='bin'>
                <h2>BIN {props.bin}</h2>
                </div>
                </Link> 

        );
    }

   export default Bins;
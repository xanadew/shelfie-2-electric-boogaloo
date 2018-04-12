import React from 'react';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

const BinHeader = (props) => {
    const addTo = props.addTo ? 'Add to' : '';
        return (
            <div className='BinHeader header'>
                <Link to='/'>
                    <div className='headerLogo'>
                        <img src={logo} alt='logo'/>
                    </div>
                </Link>
                <Link to={`/bins/${props.id[0]}`} className='headerShelf'>
                    <span>SHELF {props.id[0]}</span>
                    </Link>
                    <div className='headerBin'>
                        <span>{addTo} Bin {props.id[1]}</span>
                    </div>
            </div>
        );
    }

export default BinHeader;
import React, { Component } from 'react';
import BossHeader from '../Headers/BossHeader';
import Shelvez from './Shelvez';

class Dash extends Component {
    render() {
        return (
            <div>
                <BossHeader/>
            <div className='shelvez-wrapper'>
                <Shelvez labels={['A','B','C','D']}/>
            </div>    
            </div>
        );
    }
}

export default Dash;
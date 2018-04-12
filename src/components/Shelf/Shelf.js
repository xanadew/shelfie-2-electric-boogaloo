import React, { Component } from 'react';
import Bins from '../Bins/Bins';
import Empty from '../Empty/Empty';
import axios from 'axios';
import ShelfHeader from '../Headers/ShelfHeader';
import './Shelf.css';

class Shelf extends Component {
    constructor(){
        super();
        this.state={
            bins:[]
        }
    }
    componentDidMount(){
        const shelfId = this.props.match.params.label;
        axios.get(`/api/shelf/${shelfId}`).then(res => {
            this.setState({bins: res.data});
        }).catch(err => console.log(err))
    }
    render() {
        let bins  = this.state.bins.map((bin, i) => {
            if (bin && bin.product_name){
                        return <Bins 
                                 key={i} 
                                 id={this.props.match.params.label + (i+1)} 
                                 bin={bin.bin} 
                                 name={bin.product_name} 
                                 image={bin.image}
                                 price={bin.price}/>

                        } else {
                            return <Empty 
                                        key={i} 
                                        id={this.props.match.params.label + (i+1)}/>

            }
        })
        return (
            <div>
                <ShelfHeader name={this.props.match.params.label}/>
                <div className='wrapper'>
                    <div className='unwrapper'></div>
                    <div className='bin-wrapper'>
                    {bins}
                    </div>
                </div>
            </div>
        )
    }
}

export default Shelf;
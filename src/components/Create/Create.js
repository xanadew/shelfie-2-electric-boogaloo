import React, { Component } from 'react';
import axios from 'axios';
import BinHeader from '../Headers/BinHeader';
import './Create.css';

class Create extends Component {
    constructor(){
        super();
        this.state={
            product_name: '',
            price: '$0'
        }
    }
    setPrice(val){
        this.setState({
            price:val[0] === '$' ? val : '$' + val
        })
    }
    setName(val){
        this.setState({
            product_name:val
        })
    }
    onAdd(){
        let {id} = this.props.match.params;
        // let body = {shelfid:id[0], bin:id[1], product_name:this.state.product_name, price:this.state.price.replace('$','')};
        axios.post(`/api/bin/`, {
            shelfid:id[0],
            bin:id[1],
            product_name:this.state.product_name,
            price:this.state.price.replace('$','')
        })
        .then(res => {
            console.log(res);
            this.props.history.goBack();
        }).catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <BinHeader id={this.props.match.params.id} addTo={true}/>
            <div className='newproduct'>
                <span>Name:</span>
                <input onChange={e => this.setName(e.target.value)} />
                <span>Price:</span>
                <input value={this.state.price} onChange={e => this.setPrice(e.target.value)} />
                <button onClick={() => this.onAdd()}>+ Add to Bin</button>
            </div>
            </div>
        );
    }
}

export default Create;
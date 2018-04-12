import React, { Component } from 'react';
import axios from 'axios';
import BinHeader from '../Headers/BinHeader';
import './Product.css';

class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            product_name:'',
            price:'',
            button:'Edit'
        }
        this.handleClick=this.handleClick.bind(this);
        this.changeName=this.changeName.bind(this);
        this.changePrice=this.changePrice.bind(this);
    }
    componentDidMount(){
        axios.get(`/api/bin/${this.props.match.params.id}`)
        .then(res=>{
            console.log(res.data);
            let {product_name, price} = res.data[0];
            this.setState({product_name: product_name,
                           price: '$' + price})
        }).catch(err=>console.log(err))
    }
    changeName(e){
        this.setState({product_name: e.target.value})
    }
    changePrice(e){
        this.setState({price: e.target.value[0] === '$' ? e.target.value : '$' + e.target.value})
    }
    handleClick(){
        if(this.state.button === 'Edit'){ this.allowEdit() }else{ this.editProduct()} 
    }
    allowEdit(){
        let inputs = document.getElementsByTagName('input');
        inputs[0].removeAttribute('readOnly');
        inputs[1].removeAttribute('readOnly');
        this.setState({button: 'Save'});
    }
    editProduct(){
        axios.put(`/api/bin/${this.props.match.params.id}`, {
            product_name: this.state.product_name,
            price: this.state.price.replace('$','')
        }).then(res=>{
            this.setState({button: 'Edit', product_name:this.state.product_name, price: this.state.price.replace('$','')});
            let inputs = document.getElementsByTagName('input');
            inputs[0].setAttribute('readOnly',true);
            inputs[1].setAttribute('readOnly',true);
        }).catch(err=>console.log(err));
    }
    deleteProduct(){
        axios.delete(`/api/bin/${this.props.match.params.id}`)
        .then(res => {
            console.log(res.data);
            this.props.history.goBack();
        }).catch(err => console.log(err))
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <BinHeader id={this.props.match.params.id} addTo={false}/>
            
            <div className='product'>
                <div className='spacer'></div>
                <div className='product-img'>
                    <img src='https://i.imgur.com/xbaJhUa.jpg' alt=''/> 
                </div>
                <div className='inputs'>
                <span>Name:</span>
                <input readOnly value={`${this.state.product_name}`} onChange={this.changeName}/>
                <span className='clear'>Price:</span>
                <input readOnly value={`${this.state.price}`} onChange={this.changePrice}/>
                <div className='product-buttons clear'>
                    <button onClick={this.handleClick} className={this.state.button}>{this.state.button}</button>
                    <button onClick={() => this.deleteProduct()}>Delete</button>
                </div> 
                </div>
            </div>
            </div>
        );
    }
}

export default Product;
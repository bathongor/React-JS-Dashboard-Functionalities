import React, { Component } from 'react';
import './App.css';

class AddProduct extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.onAdd(this.nameInput.value, this.itemInput.value, this.priceInput.value);
    this.nameInput.value = '';
    this.itemInput.value = '';
    this.priceInput.value = '';
  }

  render() {
    return (
        <div>
            <form onSubmit={this.onSubmit}>
              <input placeholder="Enter Name" ref={nameInput => this.nameInput = nameInput}/>
              <input placeholder="Enter Item" ref={itemInput => this.itemInput = itemInput}/>
              <input placeholder="Enter Price"  ref={priceInput => this.priceInput = priceInput}/>
              <button>Add Product Entry</button>
            </form>
            <hr/>
        </div>       
    );  
  }
}

export default AddProduct;
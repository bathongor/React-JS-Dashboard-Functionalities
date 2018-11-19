import React, { Component } from 'react';
import './App.css';

class SearchProduct extends Component {
  constructor(props){
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event){
    event.preventDefault();
    this.props.onSearch(this.nameInput.value);
  }

  render() {
    return (
        <div>
            <input placeholder="Search By Name" ref={nameInput => this.nameInput = nameInput} onChange={this.onSearch}/>
            <hr/>
        </div>       
    );  
  }
}

export default SearchProduct;
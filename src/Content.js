import React, { Component } from 'react';
import './App.css';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';
import SearchProduct from './SearchProduct';
import Pagination from "react-js-pagination";
const products = [
  {
  "name": "Vernon Dunham",
  "item": "Milk",
  "price": "2700"
  }, 
  {
  "name": "Dori Neal",
  "item": "Bread",
  "price": "1300"
  }, 
  {
  "name": "Rico Muldoon",
  "item": "Butter",
  "price": "2500"
  },
  {
  "name": "Beau Ressa",
  "item": "Panini",
  "price": "2600"
  },
  {
  "name": "Shaw Turner",
  "item": "Deli",
  "price": "5600"
  },
  {
  "name": "Steph Curry",
  "item": "Hamburger",
  "price": "8600"  
  },
  {
  "name": "Kevin Durant",
  "item": "Burrito",
  "price": "7500"   
  },
  {
  "name": "Klay Thompson",
  "item": "Quesedilla",
  "price": "5400"   
  }
];

localStorage.setItem('products',JSON.stringify(products));

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem('products')),
      sortDirection: 'Asc',
      searchResult: [],
      activePage: 1,
      productsPerPage: 5
    };  
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onSortByPrice = this.onSortByPrice.bind(this);
    this.onSortByField = this.onSortByField.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  handlePageChange(pageNumber){
    this.setState({activePage: pageNumber});
  }

  componentWillMount(){
    const products = this.getProducts();
    this.setState({ products, searchResult: products });
  } 

  getProducts(){
    return this.state.products;
  }

  onAdd(name, item, price){
    if(isNaN(Number(price))){
      return alert('Sorry, the price is invalid!');
    }
    const products = [...this.state.products];
    products.push({name, item, price});
    const searchResult = [...this.state.searchResult];
    searchResult.push({name, item, price});
    this.setState({ products, searchResult });
  }

  onDelete(name){
    const products = this.getProducts();
    const searchResult = this.state.searchResult.filter(item => name !== item.name);
    const filteredProducts = products.filter(product =>{
      return product.name !== name;
    });
    this.setState({ products: filteredProducts, searchResult });
  }

  onEditSubmit(name, item, price, originalName){
    let products = this.getProducts();
    products = products.map(product =>{
      if(product.name === originalName){
        product.name = name;
        product.item = item;
        product.price = price;
      }
      return product;
    });
    this.setState({ products });
  }

  onSortByPrice(order){  
    var searchResult = this.state.searchResult.sort((a, b) => {
        if(order === 'Asc'){
            return parseFloat(a.price) - parseFloat(b.price);
        } else {
            return parseFloat(b.price) - parseFloat(a.price);
        }
    });
    this.setState({ searchResult });
    if(order === 'Asc')
      this.setState({ sortDirection: 'Desc' });
    else
      this.setState({ sortDirection: 'Asc' });
  }

  onSortByField(field, order){
    var searchResult = this.state.searchResult.sort((a, b) => {
      if(order === 'Asc'){
        if ( a[field] < b[field] )
            return -1;
        if ( a[field] > b[field] )
            return 1;
        return 0;
      } else{
        if ( a[field] < b[field] )
            return 1;
        if ( a[field] > b[field] )
            return -1;
        return 0;   
      }
    });
    this.setState({ searchResult });
    if(order === 'Asc')
      this.setState({ sortDirection: 'Desc' });
    else
      this.setState({ sortDirection: 'Asc' });
  }

  onSearch(name){
    var searchResult = this.getProducts();
    if(name.length > 0){
      searchResult = searchResult.filter(person =>  
        person.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    this.setState({ searchResult });
  }

  render() {
    const { activePage, productsPerPage, searchResult, sortDirection } = this.state;
    const indexOfLastProduct = activePage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const activeProducts = searchResult.slice(indexOfFirstProduct, indexOfLastProduct);
    return (
      <div className="Content">

        <AddProduct 
          onAdd = {this.onAdd}
        />

        <SearchProduct
          onSearch = {this.onSearch}
        />
        
        <table Style="width:100%">
          <tbody>
            <tr>
              <th><button onClick={(event) => this.onSortByField('name',sortDirection)}>Name</button></th>
              <th><button onClick={(event) => this.onSortByField('item',sortDirection)}>Item</button></th>
              <th><button onClick={(event) => this.onSortByPrice(sortDirection)}>Price</button></th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </tbody>
          {
          activeProducts.map(product =>{
            return(
                <ProductItem 
                  key={product.name}  
                  name={product.name}
                  item={product.item}
                  price={product.price}
                  onDelete={this.onDelete}
                  onEditSubmit={this.onEditSubmit}
                />
            );
          })
          }
          </table>
        {
          (searchResult.length === 0) && 
          <div>No Results</div>
        }

        <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.productsPerPage}
            totalItemsCount={this.state.products.length}
            onChange={this.handlePageChange}      
        />  
      </div>
    );  
  }
}


export default Content;

import React, { Component } from 'react';

class ProductItem extends Component {
  constructor(props){
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.state = {
      isEdit: false
    };
  }

  onDelete(){
    const { name, onDelete } = this.props;
    onDelete(name);
  }

  onEdit(){
    this.setState( {isEdit: true} );
  }

  onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.nameInput.value, this.itemInput.value, this.priceInput.value, this.props.name);
    this.setState({ isEdit: false });
  }
  
  render() {
    const { name, price, item } = this.props;
    return (
        <div>
          {
            this.state.isEdit 
            ? (
              <form onSubmit={this.onEditSubmit}>
                <input placeholder="Enter Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                <input placeholder="Enter Item" ref={itemInput => this.itemInput = itemInput} defaultValue={item}/>
                <input placeholder="Enter Price"  ref={priceInput => this.priceInput = priceInput} defaultValue={price}/>
                <button>Save</button>
              </form>  
            ):(
              <div> 
                <span>{name}</span> 
                {' | '} 
                <span>{item}</span> 
                {' | '} 
                <span>{price}</span>
                {' | '} 
                <button onClick={this.onEdit}>Edit</button>
                {' | '} 
                <button onClick={this.onDelete}>Delete</button>
              </div>
            )
          }
            
        </div>       
    );  
  }
}


export default ProductItem;

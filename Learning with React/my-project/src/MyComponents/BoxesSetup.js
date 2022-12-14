import React, { Component } from 'react'
import Box from './Box'
import Item from './Item'

export class BoxesSetup extends Component {
  constructor(props){
    super(props);
    this.state ={
      items :[
                   {id:1,name:'red',place:'red'},
                   {id:2,name:'green',place:'green'},
                   {id:3,name:'blue',place:'blue'},
                   {id:4,name:'blue',place:'red'},
                   {id:5,name:'green',place:'blue'},
                   {id:6,name:'blue',place:'red'},
                   {id:7,name:'red',place:'green'},
                   {id:8,name:'green',place:'blue'},
                   {id:9,name:'red',place:'green'}
            ],
          }
      
    }
  

  showAllAlignedMessage =() =>{
    console.log('showAllAlignedMessage called');
    // let display = 'none';
    let flag = this.state.items.every(value => value.name === value.place)
    return flag ? 'flex' : 'none';
    
  }

  toggle = (id,name,color,buttonName) => {
    console.log("toggle works");
    console.log('"id"',id,'name', name,'color', color, 'button',buttonName);

    let updatedItems = [...this.state.items];
    let index = updatedItems.findIndex(value => value.id === id);
    console.log(index);

    if(color === 'green' && buttonName === 'next')
    {
      updatedItems[index].place = 'red';
      this.setState({items:updatedItems});
    }
    else if(color === 'red' && buttonName === 'prev')
    {
      updatedItems[index].place = 'green';
      this.setState({items:updatedItems});
    }
    else if(color === 'red' && buttonName === 'next')
    {
      updatedItems[index].place = 'blue';
      this.setState({items:updatedItems});
    }
    else if(color === 'blue' && buttonName === 'prev')
    {
      updatedItems[index].place = 'red';
      this.setState({items:updatedItems});
    }
    else{

    }
   
}
    
  render() {
    let display = this.showAllAlignedMessage();
    return (
      <>
      <div className='wrapper'>
       <Box color="green"
            items={this.state.items}
            toggle = {this.toggle}
       />
       <Box color="red"
             items={this.state.items}
             toggle = {this.toggle}
       />
       <Box color="blue"
             items={this.state.items}
             toggle = {this.toggle}
       />
      </div>
      <div style={{
        display: display,
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Item item ="Hurray!!..You have alligned all the colors😄"/>
      </div>
      </>
    )
  }
}

export default BoxesSetup

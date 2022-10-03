import React, { Component } from 'react'
import Box from './Box'

export class BoxesSetup extends Component {
  constructor(props){
    super(props);
    this.state ={
      items :[
                   {id:1,name:'item1',place:'red'},
                   {id:2,name:'item2',place:'green'},
                   {id:3,name:'item3',place:'blue'},
                   {id:4,name:'item4',place:'red'},
                   {id:5,name:'item5',place:'blue'},
                   {id:6,name:'item6',place:'red'},
                   {id:7,name:'item7',place:'green'},
                   {id:8,name:'item8',place:'blue'},
                   {id:9,name:'item9',place:'green'}
            ]}
  }
  toggle = (id,name,color,buttonName) => {
    console.log("toggle works");
    console.log('"id"',id,'name', name,'color', color, 'button',buttonName);

    let updatedItems = [...this.state.items];
    let index = updatedItems.findIndex(value => value.id === id);
    console.log(index);

    if(color === 'green' && buttonName == 'next')
    {
      updatedItems[index].place = 'red';
      this.setState({items:updatedItems});
    }
    else if(color === 'red' && buttonName == 'prev')
    {
      updatedItems[index].place = 'green';
      this.setState({items:updatedItems});
    }
    else if(color === 'red' && buttonName == 'next')
    {
      updatedItems[index].place = 'blue';
      this.setState({items:updatedItems});
    }
    else if(color === 'blue' && buttonName == 'prev')
    {
      updatedItems[index].place = 'red';
      this.setState({items:updatedItems});
    }
    else{

    }
}
    
  render() {
    return (
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
    )
  }
}

export default BoxesSetup

import { connect } from 'react-redux';
import './App.css';
import Counter from './Components/Counter';
import {increment,decrement} from "./actions/counterAction"
import React from 'react';


class App extends React.Component {
  render(){
    return (
      <>
      <h1>Counter</h1>
      <Counter
          value = {this.props.counter}
          inc = {this.props.increment}
          dec = {this.props.decrement}
      />
     </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      counter : state.counter
  };
};

// const mapDispatchToProps = (dispatch) =>{
//   return{
//     increment: () =>{
//       dispatch(increment())
//     }
//   };
 
// };

const mapDispatchToProps ={increment,decrement};


// export default App;
export default connect(mapStateToProps,mapDispatchToProps)(App);

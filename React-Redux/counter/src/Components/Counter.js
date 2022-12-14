import React from 'react'

export default function Counter(props) {
    const style ={
        display:'flex',
        coldistance:'20px'
    }
  return (
    <div style={style}>
      <button onClick={props.dec}>-</button>
      <h2> {props.value} </h2>
      <button onClick={props.inc}>+</button>
    </div>
  )
}


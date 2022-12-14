import React from 'react'

function Button(props) {
    let isDisabled = props.isDisabled;
    let ID = props.items.id;
    let name = props.items.name;
    let color = props.items.place;

    if((props.color === 'green' && props.buttonContent === 'prev') || 
        (props.color === 'blue' && props.buttonContent === 'next'))
    {
        return null;
    }
  return (
   <button className='buttons'
           onClick={() => props.toggle(ID,name,color,props.buttonContent)}  
           disabled={isDisabled}>
           {props.buttonContent}
    </button>
  )
}

export default Button

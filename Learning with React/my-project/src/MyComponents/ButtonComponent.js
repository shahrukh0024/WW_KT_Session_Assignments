import React from 'react'

function ButtonComponent(props) {
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
           >
           {props.buttonContent}
    </button>
  )
}

export default ButtonComponent

import React from 'react'
import Button from './Button'
import Item from './Item'


function Box(props) {
    const boxColor ={
        backgroundColor: props.color
    }
    const SameColoredArr = props.items.filter(value => props.color === value.place);
    console.log(SameColoredArr);
  return (
    <div className='box' style={boxColor}>
        {SameColoredArr.map((value,index) => {
          let flag = false;
          if(value.name === value.place)
          {
            flag = true;
          }
            return (
                <>
                <div className='inside-box'>
                  <div>
                    <Button buttonContent="prev"
                                    color = {value.place}
                                    toggle = {props.toggle}
                                    items = {SameColoredArr[index]}
                                    isDisabled = {flag}
                                    />
                  </div>
                  <div style={{
                    color:'white',
                    textTransform: 'uppercase',
                    margin:'2px'
                  }}>
                    <Item item ={value.name}/>
                  </div>
                  <div>
                    <Button buttonContent="next"
                                    color = {value.place}
                                    toggle = {props.toggle}
                                    items = {SameColoredArr[index]}
                                    isDisabled = {flag}
                                    />
                  </div>
                </div>
                </>
                )
        } )}
    </div>
  )
}

export default Box

import React from 'react'
import ButtonComponent from './ButtonComponent'
import Item from './Item'


function Box(props) {
    const boxColor ={
        backgroundColor: props.color
    }
    const SameColoredArr = props.items.filter(value => props.color === value.place);
    // console.log(props.items);
    // console.log(SameColoredArr);
  return (
    <div className='box' style={boxColor}>
        {SameColoredArr.map((value,index) => {
            return (
                <>
                <div className='inside-box'>
                <ButtonComponent buttonContent="prev"
                                 color = {value.place}
                                 toggle = {props.toggle}
                                 items = {SameColoredArr[index]}
                                 />
                <Item item ={value.name}/>
                <ButtonComponent buttonContent="next"
                                 color = {value.place}
                                 toggle = {props.toggle}
                                 items = {SameColoredArr[index]}
                                 />
                </div>
                </>
                )
        } )}
    </div>
  )
}

export default Box

const initialState ={
    counter: 0
}

const counterReducer = (state = initialState,action) =>{
    switch(action.type)
    {
        case "INCREMENT":
            state ={
                ...state,
                counter: state.counter + 1
            };
            break;

        case "DECREMENT":
            state ={
                ...state,
                counter: state.counter - 1
            };
            break;
    }
    return state;
}

export default counterReducer;
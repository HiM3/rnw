const Reducer = (state=0,action) =>{

    console.log(state);
    console.log(action.type);

    switch(action.type){
        case 'INC':
            return state + 1;

        case 'DEC':
            return state > 0? state-1: state;

        default:
            return state;
    }


}

export default Reducer;
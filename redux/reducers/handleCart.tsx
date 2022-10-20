const cart = []

const handleCart =( state = cart , action)=>{

    const product = action.payload;
    switch(action.type){
        case 'ADD': 
            const exist  = state.find((item)=> item.id === product.id)
        if(exist){
            return state.map((x)=>x.id === product.id ? {...x , qty : x.qty +1 } : x)
        }
        else{
            const product = action.payload
            return [
                ...state , { ...product , qty :1}
            ]
        }
        default:
            break;
    }

}
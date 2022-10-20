export const addCart = ( product: any) =>{
    return{
        type: "ADD",
        payload: product
    }
}
export const deleteCart = ( product: any) =>{
    return{
        type: "DELETE",
        payload: product
    }
}
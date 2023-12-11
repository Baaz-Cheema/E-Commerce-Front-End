import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {products: [], status: { message: '', isLoading: null }},
    reducers: {
        addItem(state, action) {
            const index = state.products.findIndex((a) => action.payload.id === a.id)
            if (index === -1) { //if it doesnt exist, add it and initialise amount by 1
                state.products.push({ ...action.payload, amount: 1 })
            } else {
                const currProduct = state.products[index]
                currProduct.total += action.payload.price
                currProduct.amount++
            }
        },
        increment(state, action) {
            const index = state.products.findIndex((a) => action.payload === a.id)
            state.products[index].amount += 1
        },
        decrement(state, action) {
            const index = state.products.findIndex((a) => action.payload === a.id)
            let currProduct = state.products[index]
            if(currProduct.amount>1){
                currProduct.amount--
            } else{
               state.products= state.products.filter(a=>a.id!==currProduct.id)
            }
        },
        resetCart(state){
            state.products=[]
        }
    }
})


export const cartActions= cartSlice.actions

export default cartSlice
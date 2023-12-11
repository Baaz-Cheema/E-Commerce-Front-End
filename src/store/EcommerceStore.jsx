import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./CartSlice";
import AuthSlice from "./AuthSlice";


const productListSlice = createSlice({
    name: 'productList',
    initialState: {
        productData: [],
        filteredProducts: [],
        selectedBrands: [],
        isLoading: false,
        selectedCategory: '',
        selectedCategoryProducts: [],
        selectedProduct: {},
        allProducts: [],
        productsPerPage: 15,
        pagnation: 0,
    },
    reducers: {
        setProducts(state, action) {
            state.productData = action.payload
        },
        filterProducts(state) {
            state.filteredProducts = state.selectedBrands.map(a => a.filter(x => a === x.brand))
        },
        setBrands(state, action) {
            const brandItems = state.selectedBrands
            const products = state.productData.products

            if (action.payload === 'emptyList') { //why did i do this....
                state.selectedBrands = []
                return
            }
            if (brandItems.includes(action.payload)) {
                return
            }
            state.selectedBrands.push(action.payload)
            const matchedProducts = []
            for (let i = 0; i < state.selectedBrands.length; i++) {
                let matchedItems = products.filter(a => a.brand === state.selectedBrands[i])
                matchedProducts.push(...matchedItems)
            }
            state.filteredProducts = [...matchedProducts]
        },
        removeBrand(state, action) {
            state.selectedBrands = state.selectedBrands.filter(a => a !== action.payload)
            state.filteredProducts = state.filteredProducts.filter(a => a.brand !== action.payload)
        },
        setLoading(state) {
            state.isLoading = !state.isLoading
        },
        setCategory(state, action) {
            state.selectedCategory = action.payload
        },
        setProductDetails(state, action) {
            state.selectedProduct = action.payload
        },
        setAllProducts(state, action) {
            state.allProducts = action.payload
        },
        setPagnation(state, action) {
            state.pagnation = action.payload
        }, setCategoryProducts(state, action) {
            state.selectedCategoryProducts = action.payload
        },
        setProductsPerPage(state, action) {
            state.productsPerPage = action.payload
        },
    }
})

export const productListActions = productListSlice.actions

const store = configureStore({
    reducer: {
        productList: productListSlice.reducer,
        cart: CartSlice.reducer,
        auth: AuthSlice.reducer
    }
}
)

export default store
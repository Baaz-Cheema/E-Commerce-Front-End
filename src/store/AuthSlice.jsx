import { createSlice } from "@reduxjs/toolkit";



const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        addresses: [{ name: 'Baaz Cheema', address: '253 North Avenue', city: 'Gujrat', postalCode: '50700', state: 'Punjab', country: 'PK', id: 123, isDefault: true }],
        prevEmail: 'test123@gmail.com',
        password: 'test',
        username: 'Baaz Cheema'
    },
    reducers: {
        setLoggedIn(state, action) {
            if (action.payload === 'login') {
                state.isLoggedIn = true
            } else {
                state.isLoggedIn = false
            }
        },
        addNewAddresses(state, action) {
            state.addresses.push({ ...action.payload, id: Math.random().toString(16).slice(2), isDefault: false })
        },
        removeAddress(state, action) {
            state.addresses = state.addresses.filter(a => a.id !== action.payload)
        },
        editAddress(state, action) {
            const index = state.addresses.findIndex((a) => action.payload.id === a.id)
            state.addresses[index] = action.payload
        },
        isDefault(state, action) {
            state.addresses = state.addresses.map((a) => {
                if (a.id === action.payload) {
                    return { ...a, isDefault: true }
                }
                return { ...a, isDefault: false }
            })
        },
        setPrevEmail(state, action) {
            state.prevEmail = action.payload.email
            state.password = action.payload.password
        },
        setUsername(state, action) {
            state.username = action.payload
        }
    }
})

export const AuthSliceActions = AuthSlice.actions;

export default AuthSlice
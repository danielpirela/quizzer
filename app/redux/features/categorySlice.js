'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: 'Ninguna'
}

export const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        setCategory: (state,actions) => {
            state.title = actions.payload
        }
    }
})


export const {setCategory} = categorySlice.actions

export default categorySlice.reducer

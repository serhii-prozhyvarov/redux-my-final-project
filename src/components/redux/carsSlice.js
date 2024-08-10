import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
    name: 'сars',
    initialState: {
        selectedCategory: 'ALL'
    },
    reducers: {
        filterCategory: (state, action)=>{
            state.selectedCategory = action.payload
        }
    }

})

export const getSelectedCategory = state => state.cars.selectedCategory;
export const { filterCategory } = carsSlice.actions
export default carsSlice.reducer
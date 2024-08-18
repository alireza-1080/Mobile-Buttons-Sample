import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categoriesManager = createSlice({
    name: "categoriesManager",
    initialState,
    reducers: {
        addValue: (state, action) => {          
            state.push(action.payload); 
        },
        removeValue: (state, action) => {
                state.splice(action.payload, 1);
            }
        },
    })

export const {addValue ,removeValue} = categoriesManager.actions;
export default categoriesManager.reducer;
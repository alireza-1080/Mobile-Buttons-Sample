import { configureStore } from "@reduxjs/toolkit";
import categoriesManagerSlice from "./categoriesManagerSlice";

const store = configureStore({
    reducer: {
        categoriesManager: categoriesManagerSlice,
    }
});

export default store;
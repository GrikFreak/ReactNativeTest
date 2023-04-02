import { configureStore } from "@reduxjs/toolkit";
import navReducer  from "./slices/navSlice";

// Define a type for the slice state
export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});

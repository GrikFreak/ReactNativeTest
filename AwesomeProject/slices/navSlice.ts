import { createSlice } from '@reduxjs/toolkit';

//State
export interface NavState { 
    origin: string | null;
    destination: string | null;
    travelTimeInformation: number | null;
}

//Initial State
const initialState: NavState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
};

//Slice
export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
    },
});

//Actions
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

//Selectors
export const selectOrigin = (state: any) => state.nav.origin;
export const selectDestination = (state: any) => state.nav.destination;
export const selectTravelTimeInformation = (state: any) => state.nav.travelTimeInformation;

//Reducer
export default navSlice.reducer;
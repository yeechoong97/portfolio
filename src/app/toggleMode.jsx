import { createSlice } from "@reduxjs/toolkit";

export const toggleMode = createSlice({
    name: 'darkMode',
    initialState: {
        value: localStorage.getItem('darkMode') === "true" ? true : false,
    },
    reducers: {
        update: (state) => {
            state.value = !state.value;
            localStorage.setItem('darkMode', state.value);
        }
    }
})

export const { update } = toggleMode.actions

export default toggleMode.reducer
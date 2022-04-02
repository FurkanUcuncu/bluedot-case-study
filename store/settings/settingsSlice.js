import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        isFreeMode: false,
    },
    reducers: {
        changeMode(state, action) {
            state.isFreeMode = action.payload
        }
    }
})

export const settingsActions = settingsSlice.actions

export default settingsSlice
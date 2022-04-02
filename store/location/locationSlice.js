import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: 'location',
    initialState: {
        finalDestination: { latitude: 1, longitude: 1, latitudeDelta: 0.01, longitudeDelta: 0.01 },
        trips: [],
        trip: {},
    },
    reducers: {
        changeFinalDestination(state, action) {
            state.finalDestination = action.payload
        },
        addTrip(state, action) {
            state.trips.push(action.payload)
            state.finalDestination = {}
        },
        setTrip(state, action) {
            state.trip = action.payload
        }
    }
})

export const locationActions = locationSlice.actions

export default locationSlice
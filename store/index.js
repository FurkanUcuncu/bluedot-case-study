import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./location/locationSlice";
import settingsSlice from "./settings/settingsSlice";

const store = configureStore({
    reducer: {
        settings: settingsSlice.reducer,
        location: locationSlice.reducer,
    }
})

export default store
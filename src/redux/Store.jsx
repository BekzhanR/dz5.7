import { configureStore } from '@reduxjs/toolkit'
import { mainReducer } from './slices/mainslices.jsx'
import { basketReducer } from './slices/busketSlices.jsx'

export const store = configureStore({
    reducer: {
        main: mainReducer,
        basket: basketReducer
    }
})

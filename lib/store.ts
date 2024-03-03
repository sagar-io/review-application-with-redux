import { configureStore } from '@reduxjs/toolkit'
import reviewsReducer from './features/review/reviewSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            reviews: reviewsReducer
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


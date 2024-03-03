import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    safety: 5,
    communication: 4,
    isRecommended: true,
    praises: [],
    comments: '',
};

const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        updateSafetyScore: (state, action) => {
            state.safety = action.payload
        },
        updateCommunicationScore: (state, action) => {
            state.communication = action.payload
        },
        updateIsRecommended: (state, action) => {
            state.isRecommended = action.payload
        },
        addPraise: (state, action) => {
            state.praises.push(action.payload)
        },
        removePraise: (state, action) => {
            state.praises.splice(action.payload, 1);
        },
        updateComments: (state, action) => {
            state.comments = action.payload
        }
    }
})

export default reviewsSlice.reducer;
export const { updateSafetyScore, updateCommunicationScore, updateIsRecommended, addPraise, removePraise, updateComments } = reviewsSlice.actions;
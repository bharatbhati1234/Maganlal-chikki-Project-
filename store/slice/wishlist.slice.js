import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistItems: []
};

const wishlistSlice = createSlice({

    name: "wishlist",

    initialState,

    reducers: {

        addToWishlist: (state, action) => {

            const item = action.payload;

            const exist = state.wishlistItems.find(
                (i) => i.id === item.id
            );

            if (!exist) {
                state.wishlistItems.push(item);
            }

        },

        removeFromWishlist: (state, action) => {

            state.wishlistItems =
                state.wishlistItems.filter(
                    (item) => item.id !== action.payload
                );

        }

    }

});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
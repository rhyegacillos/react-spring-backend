import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";
import { fetchUsers } from "../thunks/fetchUsers";

const { createSlice } = require("@reduxjs/toolkit");

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        // get list of user
        builder.addCase(fetchUsers.pending, (state, action) => {
            // update state object and show the loading data
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // update state object and stop the loading data
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        // adding user
        builder.addCase(addUser.pending, (state, action) => {
            // update state object and show the loading data
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            // update state object and stop the loading data
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        // removing user
        builder.addCase(deleteUser.pending, (state, action) => {
            // update state object and show the loading data
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            // update state object and stop the loading data
            state.isLoading = false;
            state.data = state.data.filter(user => {
                return user.id !== action.payload.id
            });
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    },

});


export const usersReducer = usersSlice.reducer;
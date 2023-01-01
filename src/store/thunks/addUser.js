import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from '@faker-js/faker';

const addUser = createAsyncThunk('users/add', async () => {
    const response = await axios.post('http://localhost:8080/media/user', {
        name: faker.name.fullName()
    });

    return response.data;
});


export {addUser};
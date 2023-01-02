import { configureStore } from "@reduxjs/toolkit";
import {
  addCar,
  removeCar,
  changeSearchTerm,
  carsReducer,
} from "./slices/carSlice";
import { changeName, changeCost, formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, addCar, removeCar, changeSearchTerm, changeName, changeCost };

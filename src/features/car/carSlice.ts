import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

// type Store = {
//   cars: string[];
// };

const initialState = {
  cars: ['lorem01', 'lorem02', 'lorem03', 'lorem04'],
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
});

export const selectCars = (state: RootState) => state.car.cars;
export default carSlice.reducer;

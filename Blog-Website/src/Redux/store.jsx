import { configureStore } from '@reduxjs/toolkit';
import yorumlarReducer from './yorumlarSlice';

const store = configureStore({
    reducer: {
        yorumlar: yorumlarReducer,
    },
});

export default store;

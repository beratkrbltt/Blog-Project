import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: JSON.parse(localStorage.getItem('yorumlar')) || [], // localStorage'dan veriyi al
};

const yorumlarSlice = createSlice({
    name: 'yorumlar',
    initialState,
    reducers: {
        ekleYorum: (state, action) => {
            state.list.push(action.payload); // Yeni yorum ekler
            localStorage.setItem('yorumlar', JSON.stringify(state.list)); // localStorage'a kaydeder
        },
        temizleYorumlar: (state) => {
            state.list = []; // Tüm yorumları temizler
            localStorage.removeItem('yorumlar'); // localStorage'dan yorumları temizler
        },
    },
});

export const { ekleYorum, temizleYorumlar } = yorumlarSlice.actions;

export default yorumlarSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './Slice/newsSlice';

const store = configureStore({
	reducer: {
		news: newsSlice
	}
});

export default store;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	news: null
};

export const fetchAllNews = createAsyncThunk('notes/fetchAllNews', async () => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_HOST}/news/fetchAllNews`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.status === 200) {
			const json = await response.json();
			return json;
		} else throw new Error('Something went wrong!');
	} catch (err) {
		console.error(err);
		return null;
	}
});

export const addNews = createAsyncThunk('notes/addNews', async (news, { dispatch }) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_HOST}/news/addNews`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(news)
		});
		if (response.status === 200) {
			const res = await response.json();
			dispatch(fetchAllNews());
			return res;
		} else throw new Error('Something went wrong!');
	} catch (error) {
		console.error(error);
		return null;
	}
});

export const deleteNews = createAsyncThunk(
	'notes/deleteNews',
	async (deleteNoteId, { dispatch }) => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_HOST}/news/deleteNews/${deleteNoteId}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			if (response.status === 200) {
				const res = await response.json();
				dispatch(fetchAllNews());
				return res;
			}  else throw new Error('Something went wrong!');
		} catch (error) {
			console.error(error);
         return null;
		}
	}
);

const newsSlice = createSlice({
	name: 'news',
	initialState,
	extraReducers: {
		[fetchAllNews.fulfilled]: (state, action) => {
			state.news = action.payload;
		},
		[fetchAllNews.rejected]: (state) => {
			state.news = null;
		}
	}
});
export default newsSlice.reducer;

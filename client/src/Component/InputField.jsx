import { useEffect, useRef } from 'react';
import './InputField.css';
import { useDispatch } from 'react-redux';
import { addNews } from '../Redux/Slice/newsSlice';

const InputField = () => {
	const titleRef = useRef();
	const detailRef = useRef();
	const dateRef = useRef();
	const dispatch = useDispatch();
	const minDate = () => {
		let today = new Date();
		let month = today.getMonth() + 1;
		let date = today.getDate();
		let year = today.getFullYear();
		if (month < 10) {
			month = `0${month}`;
		}
		if (date < 10) {
			date = `0${date}`;
		}
		today = `${year}-${month}-${date}`;
		return today;
	};
	const closeForm = () => {
		document.getElementById('formContainer').classList.add('d-none');
		titleRef.current.value = '';
		detailRef.current.value = '';
		dateRef.current.value = '';
	};
	const checkIfClickedOutside = (event) => {
		if (event.target.closest('#formContainer') || event.target.closest('[data-formbtn]')) return;
		closeForm();
	};
	useEffect(() => {
		document.addEventListener('click', checkIfClickedOutside);
		return () => {
			document.removeEventListener('click', checkIfClickedOutside);
		};
		// eslint-disable-next-line
	}, []);
	return (
		<div className='InputFieldContainer'>
			<form
				id='formContainer'
				className='m-3 p-3 d-none'
				onSubmit={(event) => {
					event.preventDefault();
					dispatch(
						addNews({
							title: titleRef.current.value,
							detail: detailRef.current.value,
							date: dateRef.current.value
						})
					);
					closeForm();
				}}>
				<div className='mb-3'>
					<label htmlFor='newsTitle' className='fw-light form-label'>
						Title
					</label>
					<input
						ref={titleRef}
						type='text'
						maxLength={100}
						required
						id='newsTitle'
						className='form-control'
						placeholder='Enter News Title'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='newsDetail' className='fw-light form-label'>
						Details
					</label>
					<textarea
						ref={detailRef}
						maxLength={500}
						id='newsDetail'
						required
						className='form-control'
						placeholder='Enter News Details'
						rows='3'></textarea>
				</div>
				<div className='mb-3'>
					<label htmlFor='newsDate' className='fw-light form-label'>
						Date
					</label>
					<input
						ref={dateRef}
						min={minDate()}
						required
						id='newsDate'
						className='form-control'
						type='date'
					/>
				</div>
				<div>
					<button className='btn btn-info' type='submit'>
						Publish News
					</button>
				</div>
			</form>
		</div>
	);
};

export default InputField;

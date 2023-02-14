import { useEffect, useState, useRef } from 'react';

const Timer = () => {
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'April',
		'May',
		'June',
		'July',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	const daysName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const [today, setToday] = useState(null);
	let timer = useRef(null);
	const updateTime = () => {
		let now = new Date(1676392713922);
		let day = now.getDay();
		let date = now.getDate();
		let month = now.getMonth();
		let year = now.getFullYear();
		let min = now.getMinutes();
		let hour = now.getHours();
		let sec = now.getSeconds();
		if (min < 10) {
			min = `0${min}`;
		}
		if (sec < 10) {
			sec = `0${sec}`;
		}
		setToday({ day: daysName[day], date, month: monthNames[month], year, min, hour, sec });
	};
	useEffect(() => {
		if (timer.current) clearInterval(timer.current);
		timer.current = setInterval(updateTime, 1000);
		// eslint-disable-next-line
	}, []);
	return (
		<div className='mx-3'>
			<h6>
				{today &&
					`Current Time:- ${today.day} ${today.date}-${today.month}-${today.year} ${
						(today.hour % 12) < 10 ? `0${today.hour % 12}` : today.hour % 12
					}-${today.min}-${today.sec} ${today.hour >= 12 ? 'PM' : 'AM'}`}
			</h6>
		</div>
	);
};

export default Timer;

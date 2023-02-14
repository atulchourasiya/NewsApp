import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllNews } from '../Redux/Slice/newsSlice';

const Navbar = (props) => {
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(fetchAllNews());
		// eslint-disable-next-line
	},[])
	return (
		<header>
			<nav className='px-4 navbar d-flex bg-body-tertiary'>
				<div>
					<span
						className='navbar-brand mb-0 h1'
						>
						News App
					</span>
				</div>
				<Link to={props.link} className='text-decoration-none fst-italic fw-bold'>
					Go to {props.Page}&#62;&#62;
				</Link>
			</nav>
		</header>
	);
};

export default Navbar;

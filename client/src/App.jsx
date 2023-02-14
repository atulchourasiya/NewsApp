import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import InputField from './Component/InputField';
import Navbar from './Component/Navbar';
import NewsTable from './Component/NewsTable';
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import Timer from './Component/Timer';
import './App.css';

const App = () => {
	return (
		<Router>
			<InputField />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Navbar link={'/latestUpadate'} Page={'Latest News'} />
							<Page1 />
							<NewsTable delete={true} />
						</>
					}></Route>
				<Route
					path='/latestUpadate'
					element={
						<>
							<Navbar link={'/'} Page={'Create News'} />
							<Page2 />
							<NewsTable delete={false} />
							<Timer/>
						</>
					}></Route>
			</Routes>
		</Router>
	);
};

export default App;

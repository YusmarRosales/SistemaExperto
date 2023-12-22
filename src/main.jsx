import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Modal from './Components/Modal';
import Login from './Components/Login';
import Layout from './Components/loyout';
import Psicologia from './Components/sistema/psicologia';
import Juridico from './Components/sistema/juridico';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/registry' element={<Modal />} />
				<Route path='/user' element={<Login />} />
				<Route path='/user/home' element={<Layout />} />
				<Route path='/user/home/psicologia' element={<Psicologia />} />
				<Route path='/user/home/juridico' element={<Juridico />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
)

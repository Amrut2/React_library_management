import React from 'react';
import Login from './components/Login/Login'; 


import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import SurfEbooks from './components/SurfEbooks/SurfEbooks';
import TakeQuiz from './components/Quiz/TakeQuiz';
import Logout from './components/Logout/Logout';
import NewComponent from './components/SurfEbooks/NewComponent';


const App=()=>{
	return(
		<>
		<Router>
			<Routes>
				<Route path='/' element={<Login/>}/>
				<Route path='/dashboard' element={<Dashboard/>}/>
				<Route path='/surfbooks' element={<SurfEbooks/>} />
				<Route path='/takequiz' element={<TakeQuiz />} />
				<Route path='/logout' element={<Logout />} />
				<Route path="/new-component" element={<NewComponent />} />
			</Routes>
		</Router>
		</>
	)
}		
	

export default App 
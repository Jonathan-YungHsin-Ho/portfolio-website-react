import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Contexts
import ModeProvider from './contexts/ModeContext';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import Landing from './pages/Landing';
// import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
	return (
		<div className='App'>
			<ModeProvider>
				<NavBar />
				<Route exact path='/' component={Landing} />
				{/* <Route path='/about' component={About} /> */}
				<Route path='/skills' component={Skills} />
				<Route path='/projects' component={Projects} />
				<Route path='/Contact' component={Contact} />
				<Footer />
			</ModeProvider>
		</div>
	);
}

export default App;

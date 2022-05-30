import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './views/Home';
import TakeTurnsView from './views/TakeTurnsView';
import TurnsView from './views/TurnsView';
import Footer from './components/Footer/Footer';

import "./App.css"

function App() {

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/take-turns" element={<TakeTurnsView/>}/>
            <Route path="/current-turns" element={<TurnsView/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

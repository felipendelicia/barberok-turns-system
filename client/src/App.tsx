import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import TakeTurns from './components/TakeTurns/TakeTurns';
import Turns from './components/Turns/Turns';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/take-turn" element={<TakeTurns/>}/>
          <Route path="/current-turns" element={<Turns/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

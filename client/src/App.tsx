import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Router>
        <AnimatedRoutes/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

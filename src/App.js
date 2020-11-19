import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          
        </main>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import HomeContainer from './Containers/HomeContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Route path='/' exact component={() => <HomeContainer />} />
        </main>
      </Router>
    </div>
  );
}

export default App;

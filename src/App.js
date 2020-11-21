import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import HomeContainer from './Containers/HomeContainer'
import UserReportContainer from './Containers/UserReportContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar userId={1}/>
        <main>
          <Route path='/' exact component={() => <HomeContainer />} />
          <Route path='/users/:id' component={UserReportContainer} />
        </main>
      </Router>
    </div>
  );
}

export default App;

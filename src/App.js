import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar'
import HomeContainer from './Containers/HomeContainer'
import UserReportContainer from './Containers/UserReportContainer'
import Signup from './Components/Signup'
import Login from './Components/Login'
import React, {Component} from 'react'

class App extends Component {
  state = {
    user: null,

  }

  loginUser = (user) => {
    console.log(typeof user)
    this.setState({ user })
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Navbar user={this.state.user}/>
          <main>
            <Route path='/' exact component={() => <HomeContainer />} />
            <Route path='/users/:id' component={UserReportContainer} />
            <Route path='/signup' component={() => this.state.user ? <Redirect to="/" /> : <Signup loginUser={this.loginUser}/>} />
            <Route path='/login' component={() => this.state.user ? <Redirect to="/" /> : <Login loginUser={this.loginUser}/>} />
          </main>
        </Router>
      </div>
    )
  }
}

export default App;

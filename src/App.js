import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import HomeContainer from './Containers/HomeContainer'
import UserReportContainer from './Containers/UserReportContainer'
import Signup from './Components/Signup'
import Login from './Components/Login'
import CoursesContainer from './Containers/CoursesContainer'
import SumbitScoresContainer from './Containers/SubmitScoresContainer'
import SteamLogin from './Components/SteamLogin'
import OauthCallback from './Components/OauthCallback'
import React, {Component} from 'react'

class App extends Component {
  state = {
    user: null
  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    if(token){
      fetch('https://fore-the-record-backend.herokuapp.com/profile',{
        method: 'GET',
        headers: {
          'Authorization':`Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(user => this.setState({user}))
    }
  }

  loginUser = (user) => {
    this.setState({ user })
  }

  logoutUser = () => {
    localStorage.removeItem('token')
    this.setState({user: null})
    return <Redirect to="/" />
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Navbar user={this.state.user}/>
          <main>
            <Switch>
              <Route path='/' exact component={() => <HomeContainer />} />
              <Route path='/users/:id' component={UserReportContainer} />
              <Route path='/courses' component={CoursesContainer} />
              <Route path='/submitscores' component={() => this.state.user ? <SumbitScoresContainer user={this.state.user}/>  : <Redirect to="/login" />} />
              <Route path='/signup' component={() => this.state.user ? <Redirect to="/" /> : <Signup loginUser={this.loginUser}/>} />
              <Route path='/login' component={() => this.state.user ? <Redirect to="/" /> : <Login loginUser={this.loginUser}/>} />
              <Route path='/logout' component={() => this.state.user ? this.logoutUser() : <Redirect to="/" />} />
              <Route path='/steamlogin' component={SteamLogin} />
              <Route path='/oauth_callback' component={() => this.state.user && !(parseInt(this.props.user.steam_id) > 0) ? <OauthCallback userId={this.state.user.id}/> : <Redirect to="/" />}/>
            </Switch>
          </main>
        </Router>
      </div>
    )
  }
}

export default App;

import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';
 
const link = {
  height: '100%',
  padding: '0 1vw',
  textDecoration: 'none',
  color: 'white',
  float: 'left',
  fontSize: '1vw',
  alightItems: 'center'
}
 
class Navbar extends React.Component {
  render() {
    return (
      <div className={"navBar"} style={{background:'linear-gradient(360deg, rgba(22,110,20,1) 0%, rgba(22,110,20,1) 50%, rgba(67,162,51,1) 100%)', height: '3vw', margin: '0 0 1vw 0'}}>
        <NavLink to="/" exact style={link} activeStyle={{ background: 'darkgreen' }}>Home</NavLink>
        <NavLink to="/courses" exact style={link} activeStyle={{ background: 'darkgreen' }}>Courses</NavLink>
        {this.props.user ?
          (
            parseInt(this.props.user.steam_id) > 0 ? 
          <>
            <NavLink to={`/users/${this.props.user.id}`} exact style={link} activeStyle={{ background: 'darkgreen' }}>My Scorecard</NavLink>
            <NavLink to="/submitscores" exact style={link} activeStyle={{ background: 'darkgreen' }}>Submit Scores</NavLink>
            <NavLink to="/logout" exact style={{...link, float:'right'}} activeStyle={{ background: 'darkgreen' }}>Logout</NavLink>
          </>
          :
          <>
            <NavLink to="/steamlogin" exact style={link} activeStyle={{ background: 'darkgreen' }}>My Scorecard</NavLink>
            <NavLink to="/steamlogin" exact style={link} activeStyle={{ background: 'darkgreen' }}>Submit Scores</NavLink>
            <NavLink to="/logout" exact style={{...link, float:'right'}} activeStyle={{ background: 'darkgreen' }}>Logout</NavLink>
          </>
          )
          :
          <>
            <NavLink to="/login" exact style={{...link, float:'right'}} activeStyle={{ background: 'darkgreen' }}>Login</NavLink>
            <NavLink to="/signup" exact style={{...link, float:'right'}} activeStyle={{ background: 'darkgreen' }}>Signup</NavLink>
          </>
        }
      </div>
    )
  }
}
 
export default withRouter(Navbar);
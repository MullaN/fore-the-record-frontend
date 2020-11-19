import React from 'react'
import { NavLink } from 'react-router-dom';
 
const link = {
  padding: '15px 20px 15px 20px',
  margin: '0px',
  textDecoration: 'none',
  color: 'white',
  display: 'inline-block',
  float: 'left',
  'font-size': '30px'
}
 
class Navbar extends React.Component {
  render() {
    return (
      <div style={{background:'linear-gradient(360deg, rgba(22,110,20,1) 0%, rgba(22,110,20,1) 50%, rgba(67,162,51,1) 100%)', height: '61px'}}>
        <NavLink to="/" exact style={link} activeStyle={{ background: 'darkgreen' }}>Home</NavLink>
        <NavLink to="/test" exact style={link} activeStyle={{ background: 'darkgreen' }}>My Scorecard</NavLink>
        <NavLink to="/test" exact style={link} activeStyle={{ background: 'darkgreen' }}>Courses</NavLink>
        <NavLink to="/test" exact style={link} activeStyle={{ background: 'darkgreen' }}>Submit Scores</NavLink>
        <NavLink to="/test" exact style={{...link, float:'right'}} activeStyle={{ background: 'darkgreen' }}>Account</NavLink>
      </div>
    )
  }
}
 
export default Navbar;
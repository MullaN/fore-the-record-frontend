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
            <NavLink to="/submitscores" exact style={link} activeStyle={{ background: 'darkgreen' }}>Submit Scores</NavLink>
            <NavLink to="/logout" exact style={{...link, float:'right'}} activeStyle={{ background: 'darkgreen' }}>Logout</NavLink>
          </>
          )
          :
          <>
            <form action="https://steamcommunity.com/openid/login" method="post" style={{float: 'right'}}>
                <input type="hidden" name="openid.identity"
                    value="http://specs.openid.net/auth/2.0/identifier_select" />
                <input type="hidden" name="openid.claimed_id"
                    value="http://specs.openid.net/auth/2.0/identifier_select" />
                <input type="hidden" name="openid.ns" value="http://specs.openid.net/auth/2.0" />
                <input type="hidden" name="openid.mode" value="checkid_setup" />
                <input type="hidden" name="openid.realm" value="https://fore-the-record.web.app" />
                <input type="hidden" name="openid.return_to" value="https://fore-the-record.web.app/oauth_callback" />
                <button type="submit" style={{background: 'transparent', border: 'none', fontSize: '0'}}><img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/sits_large_border.png" alt='Login To Steam' style={{height: '3vw'}}/></button>
            </form>
          </>
        }
      </div>
    )
  }
}
 
export default withRouter(Navbar);
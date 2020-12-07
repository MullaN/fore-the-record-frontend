import React, {Component} from 'react'

class OauthCallback extends Component {

    componentDidMount(){
        const steam_id = window.location.search.split('&')[3].replace('openid.claimed_id=https%3A%2F%2Fsteamcommunity.com%2Fopenid%2Fid%2F','')
        fetch('https://fore-the-record-backend.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({steam_id: steam_id})
        })
        .then(resp => resp.json())
        .then(user => {
            localStorage.setItem('token', user.jwt)
            this.props.loginUser(JSON.parse(user.user))
        })
    }

    render(){
        return(
            <div>
                <h3>Logging in... please wait.</h3>
            </div>
        )
    }
}

export default OauthCallback
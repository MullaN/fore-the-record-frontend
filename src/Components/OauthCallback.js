import React, {Component} from 'react'

class OauthCallback extends Component {
    state = {
        redirect: false
    }

    componentDidMount(){
        const steam_id = parseInt(window.location.search.split('&')[3].replace('openid.claimed_id=https%3A%2F%2Fsteamcommunity.com%2Fopenid%2Fid%2F',''))
        // fetch(`https://fore-the-record-backend.herokuapp.com/users/${userId}`)
    }

    render(){
        return(
            <div>
                {}
            </div>
        )
    }
}

export default OauthCallback
import React from 'react'

const SteamLogin = () => {
    return(
        <div>
            <h1>Please link your account Fore the Record account with your Steam account to use this portion of the site.</h1>
            <form action="https://steamcommunity.com/openid/login" method="post">
                <input type="hidden" name="openid.identity"
                    value="http://specs.openid.net/auth/2.0/identifier_select" />
                <input type="hidden" name="openid.claimed_id"
                    value="http://specs.openid.net/auth/2.0/identifier_select" />
                <input type="hidden" name="openid.ns" value="http://specs.openid.net/auth/2.0" />
                <input type="hidden" name="openid.mode" value="checkid_setup" />
                <input type="hidden" name="openid.realm" value="http://localhost:3000" />
                <input type="hidden" name="openid.return_to" value="http://localhost:3000/oauth_callback" />
                <button type="submit"><img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/sits_large_border.png" alt='Login To Steam' /></button>
            </form>
        </div>
    )
}

export default SteamLogin
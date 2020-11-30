import React from 'react'

const ScoreInput = (props) => {
    return (
        <table>
        <tr>
            <th>{props.user ? props.user.username : 'User'}</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
            <th>17</th>
            <th>18</th>
        </tr>
        <tr>
        <td>{props.user ? <img src={props.user.avatar} alt={props.user.username}/> 
        : 
        <select name="user" id="user" onChange={(e) => props.changeUser(e, props.index)}>
            <option value="null">Pick Friend</option>
            {props.friends.map(friend => <option value={friend.id}>{friend.username}</option>)}
        </select>
        }</td>
            <td>{props.course['hole_1']}<hr /><input type="text" name="hole_1" value={props.userscore['hole_1']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_2']}<hr /><input type="text" name="hole_2" value={props.userscore['hole_2']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_3']}<hr /><input type="text" name="hole_3" value={props.userscore['hole_3']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_4']}<hr /><input type="text" name="hole_4" value={props.userscore['hole_4']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_5']}<hr /><input type="text" name="hole_5" value={props.userscore['hole_5']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_6']}<hr /><input type="text" name="hole_6" value={props.userscore['hole_6']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_7']}<hr /><input type="text" name="hole_7" value={props.userscore['hole_7']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_8']}<hr /><input type="text" name="hole_8" value={props.userscore['hole_8']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_9']}<hr /><input type="text" name="hole_9" value={props.userscore['hole_9']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_10']}<hr /><input type="text" name="hole_10" value={props.userscore['hole_10']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_11']}<hr /><input type="text" name="hole_11" value={props.userscore['hole_11']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_12']}<hr /><input type="text" name="hole_12" value={props.userscore['hole_12']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_13']}<hr /><input type="text" name="hole_13" value={props.userscore['hole_13']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_14']}<hr /><input type="text" name="hole_14" value={props.userscore['hole_14']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_15']}<hr /><input type="text" name="hole_15" value={props.userscore['hole_15']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_16']}<hr /><input type="text" name="hole_16" value={props.userscore['hole_16']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_17']}<hr /><input type="text" name="hole_17" value={props.userscore['hole_17']} onChange={(e) => props.changeData(e, props.index)}/></td>
            <td>{props.course['hole_18']}<hr /><input type="text" name="hole_18" value={props.userscore['hole_18']} onChange={(e) => props.changeData(e, props.index)}/></td>
        </tr>
    </table>
    )
}

export default ScoreInput
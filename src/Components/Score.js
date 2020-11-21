import React from 'react'

const Score = (props) => {
    return(
        <tr>
            <td><img src={props.round.user.avatar} alt={props.round.user.username}/></td>
            <td>{props.round.course.name}</td>
            <td>{props.round.score}</td>
            <td>{props.round.course['hole_1']}<hr />{props.round['hole_1']}</td>
            <td>{props.round.course['hole_2']}<hr />{props.round['hole_2']}</td>
            <td>{props.round.course['hole_3']}<hr />{props.round['hole_3']}</td>
            <td>{props.round.course['hole_4']}<hr />{props.round['hole_4']}</td>
            <td>{props.round.course['hole_5']}<hr />{props.round['hole_5']}</td>
            <td>{props.round.course['hole_6']}<hr />{props.round['hole_6']}</td>
            <td>{props.round.course['hole_7']}<hr />{props.round['hole_7']}</td>
            <td>{props.round.course['hole_8']}<hr />{props.round['hole_8']}</td>
            <td>{props.round.course['hole_9']}<hr />{props.round['hole_9']}</td>
            <td>{props.round.course['hole_10']}<hr />{props.round['hole_10']}</td>
            <td>{props.round.course['hole_11']}<hr />{props.round['hole_11']}</td>
            <td>{props.round.course['hole_12']}<hr />{props.round['hole_12']}</td>
            <td>{props.round.course['hole_13']}<hr />{props.round['hole_13']}</td>
            <td>{props.round.course['hole_14']}<hr />{props.round['hole_14']}</td>
            <td>{props.round.course['hole_15']}<hr />{props.round['hole_15']}</td>
            <td>{props.round.course['hole_16']}<hr />{props.round['hole_16']}</td>
            <td>{props.round.course['hole_17']}<hr />{props.round['hole_17']}</td>
            <td>{props.round.course['hole_18']}<hr />{props.round['hole_18']}</td>
        </tr>
    )
}

export default Score
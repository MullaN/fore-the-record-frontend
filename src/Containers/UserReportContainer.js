import React, {Component} from 'react'
import ScoreCardContainer from './ScoreCardContainer'
import CourseCard from '../Components/CourseCard'
import {Grid} from 'semantic-ui-react'

class UserReportContainer extends Component {
    state = {
        user: null
    }

    componentDidMount(){
        const userId = this.props.match.params.id
        fetch(`https://fore-the-record-backend.herokuapp.com/users/${userId}`)
        .then(resp => resp.json())
        .then(user => this.setState({ user }))
        .catch(errors => console.log(errors))
    }
     
     componentDidUpdate(prevProps) {
       if(prevProps.match.params.id !== this.props.match.params.id){
        const userId = this.props.match.params.id
        fetch(`https://fore-the-record-backend.herokuapp.com/users/${userId}`)
        .then(resp => resp.json())
        .then(user => this.setState({ user }))
        .catch(errors => console.log(errors))
       }
     }

    render(){
        const {user} = this.state
        if (user && user.id){
            return (
                <div>
                    <img id='main-profile' src={user.avatar} alt={user.username} />
                    <h1>{user.username}</h1>
                    <Grid columns={3}>
                        <Grid.Column>
                            <h1>{user.handicap}</h1>
                            <h3>HANDICAP</h3>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="ui centered card">
                                {user.best_course.name ? <CourseCard course={user.best_course} /> : null}
                            </div>
                            <h3>BEST MAP</h3>
                        </Grid.Column>
                        <Grid.Column>
                            {user.best_round.score ? <h1 id='best-round-score'>{user.best_round.score}</h1> : 'N/A'}
                            <h3>BEST ROUND ({user.best_round.course ? user.best_round.course.name : 'N/A'})</h3>
                        </Grid.Column>
                    </Grid>
                    <br />
                    <br />
                    <h2>LAST 20 ROUNDS</h2>
                    <ScoreCardContainer url={`https://fore-the-record-backend.herokuapp.com/users/${user.id}/rounds`}/>
                </div>
            )
        } else if (!user){
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>USER NOT FOUND</h1>
                </div>
            )
        }
    }
}

export default UserReportContainer
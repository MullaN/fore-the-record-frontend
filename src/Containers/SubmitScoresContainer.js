import React, {Component} from 'react'
import ScoreInput from '../Components/ScoreInput'
import { Redirect } from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'
import '../App.css'

class SumbitScoresContainer extends Component {
    state = {
        course: null,
        users: [{user: this.props.user,
                hole_1: '',
                hole_2: '',
                hole_3: '',
                hole_4: '',
                hole_5: '',
                hole_6: '',
                hole_7: '',
                hole_8: '',
                hole_9: '',
                hole_10: '',
                hole_12: '',
                hole_13: '',
                hole_14: '',
                hole_15: '',
                hole_16: '',
                hole_17: '',
                hole_18: ''}],
        courses: [],
        friends: [],
        submitted: false,
        totalFriends: 0
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        Promise.all([fetch('https://fore-the-record-backend.herokuapp.com/courses/'), fetch(`https://fore-the-record-backend.herokuapp.com/users/${this.props.user.id}/friends`, {
            method: 'GET',
            headers: {
                'Authorization':`Bearer ${token}`
            }
        })])
        .then(([resp1, resp2]) => { 
           return Promise.all([resp1.json(), resp2.json()]) 
        })
        .then(([courses, friends]) => {
            if (friends[0]) {
                this.setState({courses, friends, totalFriends: friends.length})
            } else {
                this.setState({totalFriends: -1})
            }
        });
    }

    selectionChange = (e, v) =>{
        this.setState({course: v.value})
    }

    changeData = (e, index) => {
        let value = ''
        if (parseInt(e.target.value) > 0 && parseInt(e.target.value) < 15) {
            value = e.target.value
        }
        let users = [...this.state.users]
        let user = {...users[index]}
        user[e.target.name] = value
        users[index] = user
        this.setState({users})
    }
    
    changeUser = (v, index) => {
        let users = [...this.state.users]
        let user = {...users[index]}
        user.user = this.state.friends.find(friend => friend.id === parseInt(v.value))
        users[index] = user
        let friends = [...this.state.friends]
        friends = friends.filter(friend => friend.id !== parseInt(v.value))
        this.setState({users, friends})
    }

    addNewUser = () => {
        this.setState(prevState => (
            this.setState({users: [...prevState.users, {user: null,
                hole_1: '',
                hole_2: '',
                hole_3: '',
                hole_4: '',
                hole_5: '',
                hole_6: '',
                hole_7: '',
                hole_8: '',
                hole_9: '',
                hole_10: '',
                hole_12: '',
                hole_13: '',
                hole_14: '',
                hole_15: '',
                hole_16: '',
                hole_17: '',
                hole_18: ''}]})
        ))
    }

    submitScores = () => {
        const token = localStorage.getItem('token')
        const button = document.getElementById('submit-button')
        button.disabled = true
        button.innerText = "Submitting..."
        fetch('https://fore-the-record-backend.herokuapp.com/matches', {
            method: 'POST',
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json'
            },
            body: JSON.stringify({course: this.state.course, users: this.state.users})
        })
        .then(resp => {
            this.setState({submitted: true})
        })
    }

    render(){
        if (this.state.submitted){
            return(
                <>
                    <Redirect to={`/users/${this.props.user.id}`} />
                </>
            )
        } else if (this.state.totalFriends < 0) {
            return (
                <div>
                    <h1>No Friends Found</h1>
                    <p>We were unable to find any of your Steam friends in our system. This could be due to your Steam friends list being private. To make your friends list public, please see the following <a href='https://support.steampowered.com/kb_article.php?ref=4113-YUDH-6401'target="_blank" rel="noreferrer">Steam article</a>.</p>
                </div>
            )
        } else {
            const {courses, users} = this.state
            let options = []
            courses.forEach(course => options.push({key: course.id, text: course.name, value: course.id}))
            let course = null
            if (this.state.course) {
                course = this.state.courses.find(course => course.id === parseInt(this.state.course))
            }
            return(
                <div id='submit-scores-container'>
                    <h2>SUBMIT YOUR SCORES!</h2>
                    {this.state.course ? 
                    <div>
                        <img src={'/' + course.cover_img} alt={course.name} style={{width: '15vw', border: '1px solid white', borderRadius: '15px',}}/>
                        <h2 style={{display: 'inline'}}>   {course.name}</h2>
                    </div>
                    
                    : 
                    null}
                    <Dropdown inline placeholder='Select Course' search selection options={options} selectOnBlur={false} onChange={(e, v) => this.selectionChange(e, v)}/>
                    <br />
                    <br />
                    {this.state.course ? 
                    this.state.users.map( (userscore, index) => {
                        return(
                            <>
                                <div className="Scorecard">
                                    <br />
                                    <ScoreInput course={course} user={users[index].user} friends={this.state.friends} index={index} userscore={userscore} changeUser={this.changeUser} changeData={this.changeData}/>
                                    <br />
                                </div>
                                {index < this.state.users.length - 1 ? 
                                <>
                                <br />
                                <br />
                                </>
                                :
                                null
                                }
                            </>
                        )
                    })
                    : null} 
                    {this.state.course ? 
                    <>
                    {this.state.users.length < 12 && this.state.users.length <= this.state.totalFriends ? <button onClick={this.addNewUser}>Add a friend's score </button> : (this.state.users.length === 12 ? <button disabled={true}>Max 12 Users</button> : <button disabled={true}>Added All Friends</button>)}
                    <button id='submit-button' onClick={this.submitScores}>Submit Scores</button>
                    </>
                    :
                    null
                    }
                </div>
            )
        }
    }
}

export default SumbitScoresContainer
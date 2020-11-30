import React, {Component} from 'react'
import ScoreInput from '../Components/ScoreInput'

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
        friends: []
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
          this.setState({courses, friends})
        });
    }

    selectionChange = (e) =>{
        if (e.target.value !== 'null') {
            this.setState({course: e.target.value})
        } else {
            this.setState({course: null})
        }
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
    
    changeUser = (e, index) => {
        if(e.target.value !== 'null'){
            let users = [...this.state.users]
            let user = {...users[index]}
            user.user = this.state.friends.find(friend => friend.id === parseInt(e.target.value))
            users[index] = user
            this.setState({users})
        }
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
        fetch('https://fore-the-record-backend.herokuapp.com/matches', {
            method: 'POST',
            headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json'
            },
            body: JSON.stringify({course: this.state.course, users: this.state.users})
        })
    }

    render(){
        const {courses, users} = this.state
        let course = null
        if (this.state.course) {
            course = this.state.courses.find(course => course.id === parseInt(this.state.course))
        }
        return(
            <div>
                <h2>SUBMIT YOUR SCORES!</h2>
                {this.state.course ? 
                <div>
                    <img src={'/' + course.cover_img} alt={course.name} style={{width: '15vw', border: '1px solid white', borderRadius: '15px',}}/>
                    <h2 style={{display: 'inline'}}>   {course.name}</h2>
                </div>
                
                 : 
                 null}
                <select name="course" id="course" onChange={this.selectionChange}>
                    <option value='null'>Please Select the Course</option>
                    {courses.map(course => <option value={course.id}>{course.name}</option>)}
                </select>
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
                            <br />
                            <br />
                        </>
                    )
                })
                 : null} 
                <br />
                <br />
                {this.state.course && this.state.users.length < 12 ? <button onClick={this.addNewUser}>Add another score </button>: null}
                <br />
                <br />
                <button onClick={this.submitScores}>Submit Scores</button>
            </div>
        )
    }
}

export default SumbitScoresContainer
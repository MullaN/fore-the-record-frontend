import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import ScoreCardContainer from './ScoreCardContainer'

class CoursesCotainer extends Component {
    state = {
        courses: []
    }

    componentDidMount(){
        fetch('https://fore-the-record-backend.herokuapp.com/courses/')
        .then(resp => resp.json())
        .then(courses => this.setState({ courses }))
    }

    render(){
        return(
            <Grid columns={1}>
                {this.state.courses.map(course => {
                    return(
                        <>
                            <Grid.Row>
                                <Grid.Column>
                                    <div>
                                        <img src={'/' + course.cover_img} alt={course.name} style={{width: '15vw', border: '1px solid white', borderRadius: '15px',}}/>
                                        <h2 style={{display: 'inline'}}>   {course.name}</h2>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                        <ScoreCardContainer url={`https://fore-the-record-backend.herokuapp.com/rounds/courses/${course.id}`} />
                                    <br />
                                    <br />
                                </Grid.Column>
                            </Grid.Row>
                        </>
                    )
                })}
            </Grid>
        )
    }
}

export default CoursesCotainer
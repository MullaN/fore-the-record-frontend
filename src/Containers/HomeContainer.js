import React, {Component} from 'react';
import {Container, Card} from 'semantic-ui-react';
import HomeSplash from '../Components/HomeSplash'
import CourseCard from '../Components/CourseCard';
import '../App.css'

class HomeContainer extends Component {
    state = {
        courses: []
    }

    componentDidMount(){
        fetch('http://localhost:4000/courses')
        .then(resp => resp.json())
        .then(courses => this.setState({ courses }))
    }

    render(){
        const topThree = this.state.courses.slice(0, 3)
        return (
            <>
                <HomeSplash />
                <h2>TOP PLAYED COURSES</h2>
                <Container textAlign='center'>
                    <Card.Group itemsPerRow={3}>
                        {topThree.map(course => <CourseCard course={course}/>)}
                    </Card.Group>
                </Container>
                <br />
                <br />
                <h2>TOP SCORES</h2>
            </>
        )
    }
}

export default HomeContainer
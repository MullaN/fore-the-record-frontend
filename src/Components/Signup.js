import React, {Component} from 'react'
import '../App.css'
import {Form, Button, Grid, Header, Segment, Message} from 'semantic-ui-react'

class Signup extends Component {
    state = {
        email: '',
        'steam_id': '',
        password: '',
        'password_confirmation': ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(user => this.props.loginUser(user.user))
    }

    render(){
        return(
        <div>
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' textAlign='center'>
                        Create Your Account
                    </Header>
                        <Form className='signup-form' onSubmit={(event) => this.handleSubmit(event)} size='large'>
                            <Segment stacked>
                             <Form.Input  fluid placeholder='E-mail address' type='text' name='email' value={this.state.email} onChange={this.handleChange}/><br />
               
                             <Form.Input fluid placeholder='Steam Id' type='text' name='steam_id' value={this.state.name} onChange={this.handleChange} /><br />
               
                            <Form.Input  fluid placeholder='Password' type='password' name='password' value={this.state.password} onChange={this.handleChange}/><br />
                
                            <Form.Input fluid placeholder='Confirm Password' type='password' name='password_confirmation' value={this.state['password_confirmation']} onChange={this.handleChange}/><br />
                
                            {/* <input type='submit' /> */}
                                <Button color='olive' fluid size='large'>
                                    Sign Up
                                </Button> 
                            </Segment>
                        </Form>
                    <Message>
                         Find your Steam Id <a href='https://steamidfinder.com/'>here</a>
                     </Message>
                </Grid.Column>
            </Grid>
        </div>    
        )
    }
}

export default Signup
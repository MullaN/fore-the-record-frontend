import React, {Component} from 'react'
import {Form, Grid, Button, Header, Message, Segment} from 'semantic-ui-react'
import '../App.css'



class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://fore-the-record-backend.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(user => {
            localStorage.setItem('token', user.jwt)
            this.props.loginUser(JSON.parse(user.user))
        })
    }

    render(){
        return(
        <div>
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' textAlign='center' style={{color: 'white', fontFamily: "'Copperplate', 'Alegreya Sans SC', sans-serif"}}>
                        Log-in to your account
                    </Header>
                        <Form className='login-form' onSubmit={(event) => this.handleSubmit(event)} size='large'>
                             <Segment stacked>
                                <Form.Input  fluid icon='user' iconPosition='left' type='text' name='email' placeholder='E-mail address' value={this.state.email} onChange={this.handleChange}/><br />

                                <Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/><br />
                                <Button color='green' fluid size='large'>
                                    Login
                                </Button>    
                        </Segment>
                     </Form>
                     <Message>
                         New to us? <a href='/signup'>Sign Up</a>
                     </Message>
                </Grid.Column>
            </Grid>
         </div>   
    
        )
    }
}

export default Login

import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

class LoginScreen extends Component {

  doLogin = () => this.props.history.push('/dashboard')

  render() {
    return (
      <Container>
        <StyledPanel>
          <h2>Telegram Bot Manager</h2>
          <hr />
          <Button onClick={this.doLogin}>Login</Button>
          <SmallFooter>Yup there's no validation for now 😬</SmallFooter>
        </StyledPanel>
      </Container>
    )
  }

}

const Container = styled.div`
  background-color: #30b6f8;
  height: 100vh;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledPanel = styled.div`
  width: 30%;
  display: inline-block;
  text-align: center;
  padding: 18px 22px;
  background-color: #fafafa;
  border-radius: 6px;
`

const SmallFooter = styled.small`
  color: lightgrey;
  margin-top: 4px;
  display: block;
`

export default LoginScreen

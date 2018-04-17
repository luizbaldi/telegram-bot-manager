import React, { Component } from 'react'
import { Panel, Button } from 'react-bootstrap'
import styled from 'styled-components'

class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.doLogin = this.doLogin.bind(this)
  }
  doLogin() {
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <Container>
        <StyledPanel>
          <h4>Telegram Bot Manager</h4>
          <hr />
          <Button onClick={this.doLogin} bsStyle="primary" block>Login</Button>
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

const StyledPanel = styled(Panel)`
  width: 30%;
  height: 20vh;
  display: inline-block;
  text-align: center;
  padding: 12px;
`

export default LoginScreen

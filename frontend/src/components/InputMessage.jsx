import React, { Component } from 'react'
import Button from './Button'
import styled from 'styled-components'

class InputMessage extends Component {
  state = {
    message: ''
  }

  handleTextChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  sendMessage = () => {
    this.props.onSendMessage(this.state.message)

    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <FormContainer onSubmit={e => e.preventDefault()}>
        <Input
          type="text"
          placeholder="Type your message here"
          disabled={this.props.hasToDisable}
          onChange={this.handleTextChange}
          value={this.state.message}
        />
        <SubmitButtonContainer>
          <Button
            type="submit"
            disabled={this.props.hasToDisable}
            block
            onClick={() => this.sendMessage(this.state.message)}
          >
            Send
          </Button>
        </SubmitButtonContainer>
      </FormContainer>
    )
  }
}

const FormContainer = styled.form`
  display: flex;
`

const Input = styled.input`
  width: 85%;
  padding: 0 8px;
`

const SubmitButtonContainer = styled.div`
  width: 25%;
  display: inline;
`

export default InputMessage

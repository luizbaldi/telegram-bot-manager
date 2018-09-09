import React from 'react'
import styled from 'styled-components'

const Button = ({ children, onClick }) => (
  <Container onClick={onClick}>
    {children}
  </Container>
)

/* Styled components */
const Container = styled.div`
  background-color: papayawhip;
  padding: 12px;
  border-radius: 2px;

  &:hover {
    background-color: palegoldenrod;
    cursor: pointer;
  }
`

export default Button

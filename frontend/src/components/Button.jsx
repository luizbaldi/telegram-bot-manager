import React from 'react'
import styled from 'styled-components'

const Button = ({ children, onClick, block }) => (
  <Container onClick={onClick} block={block}>
    {children}
  </Container>
)

/* Styled components */
const Container = styled.div`
  background-color: papayawhip;
  padding: 12px;
  border-radius: 2px;
  display: ${({ block }) => block ? 'block' : 'inline-block'}
  text-align: center;

  &:hover {
    background-color: palegoldenrod;
    cursor: pointer;
  }
`

export default Button

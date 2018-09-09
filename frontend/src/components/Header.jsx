import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'

const Header = ({ isBotOnline }) => (
  <StyledHeader>
    <StatusMessage>
      Status do bot:
      { isBotOnline
        ? <OnlineLabel> Online</OnlineLabel>
        : <OfflineLabel> Offline</OfflineLabel>
      }
    </StatusMessage>
    <Link to="/">
      <LogoutButton>Logout</LogoutButton>
    </Link>
  </StyledHeader>
)

const StyledHeader = styled.header`
  height: 10vh;
  background-color: #30b6f8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`

const LogoutButton = styled(Button)`
  margin: 15px;
  float: right;
  width: 20px;
`

const StatusMessage = styled.div`
  display: inline-block;
  color: #fafafa;
  font-size: 1em;
`

const OnlineLabel = styled.span`
  font-weight: 600;
  color: #00f542;
`

const OfflineLabel = styled.span`
  font-weight: 600;
  color: #00f542;
`

export default Header

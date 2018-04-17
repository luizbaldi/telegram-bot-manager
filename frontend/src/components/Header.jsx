import React from 'react'
import { Button, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FullCol from './FullCol.styled.jsx'

const Header = ({ isBotOnline }) => (
  <FullCol xs={12}>
    <StyledHeader>
      <StatusMessage placement="right" className="in" id="tooltip-right">
        Status do bot: { isBotOnline
          ? <OnlineLabel>Online</OnlineLabel>
          : <OfflineLabel>Offline</OfflineLabel>
        }
      </StatusMessage>
      <Link to="/">
        <LogoutButton>Logout</LogoutButton>
      </Link>
    </StyledHeader>
  </FullCol>
)

const StyledHeader = styled.header`
  height: 10vh;
  background-color: #30b6f8;
`

const LogoutButton = styled(Button)`
  margin: 15px;
  float: right;
`

const StatusMessage = styled(Tooltip)`
  display: inline-block;
  margin-top: 18px;
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

import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

import {NavButtonProps} from '../../types'

function NavButton({ buttonText }: NavButtonProps) {
  return (
    <LinkContainer to={`/${buttonText}`} >
      <Button variant="outline-light" className='NavButton'>{buttonText}</Button>
    </LinkContainer>
  )
}

export default NavButton
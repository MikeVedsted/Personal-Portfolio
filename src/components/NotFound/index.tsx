import React from 'react'
import {useLocation} from 'react-router-dom'
import Container from 'react-bootstrap/Container'

function NotFound() {
  const location = useLocation();
  return (
    <Container className='text-center'>
      <p>You tried to reach {location.pathname} but I haven't created it.</p>
      <p>If you think I should, let me know through the contact form, otherwise, just try one of the buttons.</p>
    </Container>
  )
}

export default NotFound
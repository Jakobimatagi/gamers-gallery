import React from 'react'
import { Container } from '@chakra-ui/react'
import { BellIcon, EmailIcon} from '@chakra-ui/icons'
function NavBar() {
  return (
    <div >
        <Container maxW="lg" mx="auto" px="4" py="4" bg={"#0C002A"}>

        {/* user section */}
        <div className='user-section'>
        <BellIcon w={24} h={24} color='#CACED3' />
        <EmailIcon w={24} h={24} color='#CACED3' />
        </div>
        {/* search and icons */}
        <div className='search'>
            Search
        </div>
        </Container>
    </div>
  )
}

export default NavBar
import { Box, Button, Container, Flex, Link, Spinner, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { GiHamburgerMenu } from "react-icons/gi";
import { HamburgerIcon } from '@chakra-ui/icons'
import { RiArrowDropDownLine } from 'react-icons/ri'
import SideBar from '../../components/SideBar/SideBar'



const PageLayout = ({children}) => {
  const isTabletDevice = useMediaQuery({ query: '(min-device-width: 700px)' });
  const [showNav, setShowNav] = useState(true)
  const {pathname} = useLocation()
  
  // if(horizontalNav && !isTabletDevice) return (
  //   <Flex bg={'black'} justifyContent={'space-between'}>
  //     <Box>
  //     <Flex flexDir={'column'} h={'100vh'} color={'white'} bg={'black'} p={3} w={'80%'} >
  //        <Link as={RouterLink} onClick={() => setHorizontalNav(false)} to={'/'} py={2}>Insider</Link>
  //        <Link as={RouterLink} onClick={() => setHorizontalNav(false)} to={'/news'} py={2}>News</Link>
  //        <Link as={RouterLink} onClick={() => setHorizontalNav(false)} to={'/tech'} py={2}>Tech</Link>
  //        <Link as={RouterLink} onClick={() => setHorizontalNav(false)} to={'/categories'} py={2}>Categories</Link>
  //   </Flex>
  //     </Box>
  //     <Button fontWeight={800} color={'white'} onClick={() => setHorizontalNav(false)}>X</Button>
  //   </Flex>
  // )

  return (
    <Flex direction={'row'} h={'100vh'}>
                
      {/*  */}
        
      {
        pathname !== '/auth' && (
          <Box w={{base: "70px", md: "230px"}}>
            <SideBar />
          </Box>
        )
      }
      <Box flex={1} w={{base: "calc(100%)", md: "calc(100%)"}}>
        {children}
      </Box>
        
        {/* footer */}
        
    </Flex>

  )
}

export default PageLayout


import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import GoogleAuth from './GoogleAuth'

const AuthForm = () => {
   const [isLogin, setLogin] = useState(true)


  return (<>
     <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
            {/* <Image src='/logo.png' h={24} cursor={'pointer'} alt='instagrm'></Image> */}

            {isLogin ? <Login/>: <SignUp/>}            

            <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                <Box flex={2} h={"1px"} bg={"gray.600"}/>
                <Text mx={1} color={"white"}>OR</Text>
                <Box flex={2} h={"1px"} bg={"gray.600"}/>
            </Flex>

        </VStack>
     </Box>

     <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
            <Box mx={2} fontSize={14}>
               {isLogin ? "Student" : "Lecturer"}
            </Box>
            <Box onClick={() => setLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                {isLogin ? "validate" : "Log in"}
            </Box>
        </Flex>
     </Box>
  </>
  )
}

export default AuthForm
import { Container, Flex, Image, VStack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Container maxW={"container.md"} padding={0}>
          <Flex justify={"center"} alignItems={"center"} gap={10}>
              {/* left hand-side */}
            

            {/* right hand-side */}
            <VStack spacing={4} align={"stretch"} w={'full'}>
              <AuthForm/>
            </VStack>
          </Flex>
        </Container>
    </Flex>
  )
}

export default AuthPage
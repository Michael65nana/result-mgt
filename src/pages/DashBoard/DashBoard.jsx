import { Box, Card, CardBody, CardFooter, CardHeader, Container, Flex, Heading, Input, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import AddStudent from './AddStudent'

const Dashboard = () => {
  const data = localStorage.getItem('students')
   const json_data = JSON.parse(data)
  return (
    <Container maxW={'8xl'}>
        <Box>
          {/* <Avatar>Shemiel</Avatar> */}
            <Flex direction={'row'} gap={4} w={'full'} py={8} wrap={'wrap'}>
              <Card w={'30%'} bg={'black'} textColor={'white'}>
                <CardHeader>
                    <Heading>Students {json_data.students.length} </Heading>
                </CardHeader>
                <CardBody p={8} cursor={'pointer'}>
                    <Link as={RouterLink} to={'/students'}>View Students</Link >
                </CardBody>
              </Card>
              {/* <Card w={'30%'} bg={'black'} textColor={'white'}>
                <CardHeader></CardHeader>
                <CardBody p={8} cursor={'pointer'}>
                    <Text>Card Body</Text>
                </CardBody>
              </Card> */}
              <Card w={'30%'} bg={'black'} textColor={'white'}>
                <CardHeader>
                    <Heading>View Statistics</Heading>
                </CardHeader>
                <CardBody p={8} cursor={'pointer'}>
                    <Text>View Statistics </Text>
                </CardBody>
              </Card>
              <Card w={'30%'} bg={'black'} textColor={'white'}>
                <CardHeader>
                    <Heading>Add Students</Heading>
                </CardHeader>
                <CardBody p={8} cursor={'pointer'}>
                    {/* <Text as={RouterLink}>Add Student</Text> */}
                    <AddStudent />
                </CardBody>
              </Card>
            </Flex>
        </Box>
    </Container>
  )
}

export default Dashboard
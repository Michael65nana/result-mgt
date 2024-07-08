import { Accordion, Alert, Box, 
        Button, Container, MenuButton, Text, VStack,
        Flex, Skeleton, SkeletonCircle, Heading, Modal, ModalOverlay,
        ModalContent, ModalCloseButton, ModalBody, ModalHeader, useDisclosure, Table,
        TableContainer, 
        Thead,
        Tbody,
        Td,
        Tr,
        Th,
        Link
} from "@chakra-ui/react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import Student from "../../components/Student";

const Students = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const data = localStorage.getItem('students')
    const json_data = JSON.parse(data)
    console.log(json_data.students[0].courses.length)
    // json_data.students[0].courses.map((coru) => {
    //     console.log(coru)
    // })
    return(
        <Container maxW={'8xl'} py={8}>
            <BsArrowReturnLeft size={25} fontWeight={800}/>
            <Box>
                <Box py={8}>
                    <Text p={1} fontWeight={700}> Students : {json_data.students.length} </Text>
                    <Text p={1} fontWeight={700}> Students validated :</Text>
                    <Text p={1} fontWeight={700}> Students registered:</Text>
                </Box>
                <Box>
                    <VStack py={5} w={'full'}>
                        {/* <Heading>Students</Heading> */}
                        {json_data.students.map((student) => (<>
                            <Student info={student}/>
                        </>))}
                    </VStack>
                </Box>
            </Box>
        </Container>
    )
}

export default Students;
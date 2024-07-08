import React, { useState } from 'react'
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
    Link,
    Input
} from "@chakra-ui/react";

const Student = ({info}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const data = localStorage.getItem('students')
    const json_data = JSON.parse(data)
    // const [grade, setGrade] = useState()
    const [edit, isEdit] = useState(false)

    console.log(info)
    const checkGrade = () => {
        getGrade()
    }
    const verify = () => {
        isEdit(!edit)
        if (edit === true) {
            console.log('dos')
            json_data.students.map((student) => {
                if(student.name === info.name) {
                    student.courses = info.courses
                    console.log(student)
                }
            })
            localStorage.setItem('students', JSON.stringify(json_data))
        }
    }
    const getGrade = (score) => {
        let grade = score
        // console.log(score)
        if (score >= 70) {
            grade = 'A'
            return grade;
        } else if (score >= 60) {
            return "B";
        } else if (score >= 50) {
            return "C";
        } else if (score >= 45) {
            return "D";
        } else if (score >= 30) {
            return "E";
        } else if(score < 30) {
            return "F"; // Added for scores below 40
        } else if(score === '') {
            return 'Unset'
        }
    }
    // window.addEventListener('input', getGrade)
    
    return (<>
     <Button w={'full'} onClick={onOpen} px={3} justifyContent={'flex-start'}> {info.name} </Button>
                            <Modal isOpen={isOpen} onClose={onClose} size={'5xl'} >
                                <ModalOverlay/>
                                <ModalContent w={'full'}>
                                    <ModalHeader> {info.name} </ModalHeader>
                                    <ModalCloseButton/>
                                    <ModalBody w={'80%'}>
                                        <Heading py={2}>Result</Heading>
                                        {/* {[0,1,0,3].map((_, idx) => ( */}
                                            <TableContainer>
                                                <Table 
                                                //   variant={'stripped'}
                                                //   colorScheme="teal"
                                                //   padding={4}
                                                >
                                                    <Thead>
                                                        <Tr>
                                                            <Th>Course Code</Th>
                                                            <Th>Score</Th>
                                                            {edit ? (
                                                                <Th>Grade</Th>
                                                            ): null}
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        {info.courses.map((course) => (
                                                            <Tr>
                                                            <Td > {course[0].replace('_', ' ').toUpperCase()} </Td>
                                                            <Td>
                                                                {edit ? (
                                                                    <Input max={'100'} placeholder='Enter score' type='number' onChange={(e) => {course[1] = e.target.value
                                                                        console.log(info)
                                                                     }}/>
                                                                    ): 
                                                                    <Text> {course[1]} </Text>
                                                                }
                                                            </Td>
                                                            {edit ? (
                                                                <Td> {getGrade(course[1])} </Td>
                                                            ): null}
                                                            </Tr>
                                                        ))}
                                                    </Tbody>
                                                </Table>
                                            </TableContainer>
                                            <Button onClick={verify}> {!edit ? 'Edit' : 'Verify'} </Button>
                                        {/* ))} */}
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
  </>
  )
}

export default Student
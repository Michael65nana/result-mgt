import { Box, Button, Flex, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
const AddStudent = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const data = localStorage.getItem('students')
    const json_data = JSON.parse(data)
    const [studentId, setStudentId] = useState({
        studentname: '',
        mat_no: '',
        registered: false,
        courses: []
    })

    console.log(studentId)
    const handleAddStudent = () => {
        console.log(json_data)
        json_data.students.push(studentId)
        localStorage.setItem('students', JSON.stringify(json_data))
        onClose()
    }
    // const AddCourse = () => {
    //     const form = document.getElementById('form')
    //     const course_code = prompt('Course Code')
    //     // if(course_code) {
    //     //     // setStudentId(...studentId, {courses: {'course_code':course_code, 'grade': e.target.value}})
    //     // }
    //     const cCode = document.createElement('p')
    //     cCode.style.cssText = 'padding: 4px; border: 1px solid inherit; border-radius: 2px'
    //     cCode.classList.add('cCode')
    //     cCode.textContent = course_code
    //     const inPutElement = document.createElement('input')
    //     inPutElement.style.cssText = 'width: 80%; padding: 4px; border: 1px solid; border-color: inherit; color: inherit border-radius: 2px'
    //     // inPutElement.onchange = (e) => setStudentId({...studentId, courses: {'course_code':course_code, 'grade': e.target.value}})
    //     inPutElement.addEventListener('input',  (e) => {
    //         // setStudentId({...studentId, courses: {course_code:e.target.value}})})
    //         studentId.courses[course_code] = e.target.value
    //         console.log(studentId)
    //     })
    //     form.appendChild(cCode)
    //     form.appendChild(inPutElement)
    // }

    return(<>
        <Text onClick={onOpen}>Add Student</Text>
        <Modal isOpen={isOpen} onClose={onClose} size={'5xl'}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Add Student</ModalHeader>
                <ModalCloseButton/>
                <ModalBody p={5} w={'full'}>
                    <Input 
                      placeholder="Name"
                      m={2}
                      type="text"
                      size={'sm'}
                      value={studentId.studentname}
                      onChange={(e) => setStudentId({...studentId, studentname: e.target.value})}
                    />
                    <Input 
                      placeholder="Mat No"
                      type="text"
                      m={2}
                      size={'sm'}
                      value={studentId.mat_no}
                      onChange={(e) => setStudentId({...studentId, mat_no: e.target.value})}
                    />
                    {/* <Box id="form" w={'full'} display={'flex'} flexWrap={'wrap'}></Box> */}
                </ModalBody>
                <ModalFooter>
                    <Flex w={'full'} justifyContent={'space-between'}>
                       {/* <Button onClick={AddCourse} bg={'black'}>Add Course</Button>  */}
                       <Button onClick={handleAddStudent} bg={'black'}>Add Student</Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>)
}

export default AddStudent;
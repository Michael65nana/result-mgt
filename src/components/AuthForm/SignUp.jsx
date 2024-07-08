import { CheckIcon, CloseIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, Button, Checkbox, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import useSignUpWithEmailAndPassword from '../../hooks/useSignUpWithEmailAndPassword'
import useGetData from '../../hooks/useGetData'

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [courses, setCoures] = useState([
    'gst_322',
    'gst_124',
    'gst_125',
    'gst_126',
    "sen_482",
    "sen_310",
    "sen_539",
    "sen_549",
    "csc_232",
    "csc_210",
    "csc_211",
    "csc_212",
    'mth_667',
    "mth_310",
    'mth_721',
    'mth_331',
    "phy_420",
    "phy_430",
    "phy_420",
    "phy_450",
    "edu_101",
    'msc_584',
   ])
  //  console.log(data.users)
  const [inputs, setInputs] = useState({
    student_name: '',
    mat_no: '',
    courses: {}
   })
   let sz = [
   ]
  //  sz.push(['os', 'od'])
   console.log(sz.length)

   const [showPassword, setShowPassword] = useState(false)
   const {loading, error, signUp} = useSignUpWithEmailAndPassword()
   console.log(inputs)
  
   const validate = () => {
    const courses_checkbox = document.querySelectorAll('.check')
    // const student_courses = []
    for(let i=0; i < courses_checkbox.length; i++) {
      if(courses_checkbox[i].checked === true) {
        // console.log(courses_checkbox[i])
        sz.push([courses_checkbox[i].value, ''])
        // console.log(student_courses)
      }
    }
   inputs.courses = sz
   console.log('io')

   const data = localStorage.getItem('students')
   const json_data = JSON.parse(data)
   json_data.students.map((student) => {
    if(student.name == inputs.student_name) {
      student.courses = sz
      console.log(student.courses.length)
      // student.courses.map((cour) => {
      //   console.log(cour)
      // })
      student.registered = true
    }else {
      console.log('coe')
    }
    // console.log(student)s
   })
   localStorage.setItem('students', JSON.stringify(json_data))
   }

  return (<>
    <Input
        placeholder="mat no"
        fontSize={14}      
        type='text'  
        value={inputs.mat_no}
        size={'sm'}
        onChange={(e) => setInputs({...inputs, mat_no: e.target.value })}
    />
    <Input
        placeholder="fullname"
        fontSize={14}      
        type='text'  
        value={inputs.student_name}
        size={'sm'}
        onChange={(e) => setInputs({...inputs, student_name: e.target.value })}
    />
    <Flex w={'100%'} justifyContent={'start'} flexDir={'row'} wrap={'wrap'}>
      {courses.map((course) => (<>
        <Flex key={course} w={'50%'}>
          <input type='checkbox' id={course} className='check' name='courses' value={course} />
          <label >{course.replace(/_/, ' ')}</label>
        </Flex>
      </>
    ))}
    </Flex>

    {error && (
      <Alert status='error' fontSize={13} p={2} borderRadius={4}>
        <AlertIcon fontSize={12}/>
        {error.message}
      </Alert>
    )}

    <Button w={"full"}  colorScheme='blue' size={'sm'} 
      fontSize={14} onClick={() => validate()}
      isLoading={loading}
    >
        Validate
    </Button>
  </>
  )
}

export default SignUp
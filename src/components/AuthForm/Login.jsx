import { Alert, AlertIcon, Button, Input, Link } from "@chakra-ui/react"
import { useState } from "react"
import useLogin from "../../hooks/useLogin"
import { Link as Rous } from "react-router-dom"

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
   })
 
   const {loading, error, login} = useLogin() 
   const [so, setSo] = useState(false)

  return (
    <>
    <Input
        placeholder="email"
        fontSize={14}      
        type='email'  
        size={'sm'}
        value={inputs.email}
        onChange={(e) => setInputs({...inputs, email: e.target.value })}
    />
    <Input
        placeholder="password"
        fontSize={14}        
        type='password'
        size={'sm'}
        value={inputs.password}
        onChange={(e) => setInputs({...inputs, password: e.target.value})}
    />
    {error && (
      <Alert status='error' fontSize={13} p={2} borderRadius={4}>
        <AlertIcon fontSize={12}/>
        {error.message}
      </Alert>
    )}
    <Link w={"full"}  as={Rous} to={so? '/': null}  colorScheme='blue' size={'sm'} fontSize={14} onClick={() => {
      if(inputs.email === 'admin' && inputs.password === '1233') {setSo(true)}}
    } isLoading={loading}>
        Log in
     </Link>
    </>
  )
}

export default Login
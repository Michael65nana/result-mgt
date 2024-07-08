import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../FireBase/FireBase'
import useShowToast from '../../hooks/useShowToast'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import useAuthStore from '../../store/useAuthStore'

const GoogleAuth = ({prefix}) => {
    
  const [signInWithGoogle, error] = useSignInWithGoogle(auth)
  const showToast = useShowToast()
  const loginUser = useAuthStore((state) => state.login)

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle()
      if(!newUser && error) {
        showToast('Error', error.message, 'error')
        return
      }
    
      const userRef = doc(firestore, 'users', newUser.user.uid)
      const userSnap = await getDoc(userRef)

      if((await userSnap).exists()) {
        // Sign In
        const userDoc = userSnap.data()
        localStorage.setItem('user-info', JSON.stringify(userDoc))
        loginUser(userDoc)
      }else {
        // Sign Up
        const userDoc = {
          uid: newUser.user.uid,
          email:newUser.user.email,
          username: newUser.user.email.split('@')[0],
          fullname: newUser.user.displayName,
          bio:"",
          profilePicUrl: newUser.user.photoURL,
          following:[],
          followers: [],
          posts: [],
          createdAt: Date.now()
      }
      await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc)
      localStorage.setItem('user-info', JSON.stringify(userDoc))
      loginUser(userDoc)
      }
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }
  return (
    <Flex alignItems={'center'} justifyContent={"center"} cursor={"pointer"} onClick={handleGoogleAuth}>
        <Image src='/google.png' w={5} alt='google logo'/>
        <Text mx={2} color={"blue.500"}>{prefix} with Google</Text>
    </Flex>
  )
}

export default GoogleAuth
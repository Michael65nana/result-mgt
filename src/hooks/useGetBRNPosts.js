import React, { useEffect, useState } from 'react'
import usePostStore from '../store/postStore'
import useShowToast from './useShowToast'
// import useUserProfileStore from '../store/userProfileStore'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { firestore } from '../FireBase/FireBase'

const useGetBRNPosts = () => {
    const [isLoadingDoc, setIsLoadingDoc] = useState(true)
    const {bRNews, setbRNews} = usePostStore()
    const showToast = useShowToast()
  //   const userProfile = useUserProfileStore((state) => state.userProfile)
//   console.log(bRNews)
    useEffect(() => {
      const getPosts = async() => {
          // if(!userProfile) return
          setIsLoadingDoc(true)
          setbRNews([])
          try {
              const q = query(collection(firestore, 'posts'),where('relevant', '==', true))
              const querySnapShot = await getDocs(q)
              const posts = []
              querySnapShot.forEach((doc) => {
                  posts.push({...doc.data(), id:doc.id})
              })
              posts.sort((a,b) => b.createdAt - a.createdAt)
              setbRNews(posts)
          } catch (error) {
              showToast('Error', error.message,'error')
              setbRNews([])
          }finally {
              setIsLoadingDoc(false)
          }
      }
      getPosts()
    },  [setbRNews, showToast])
    return {isLoadingDoc, bRNews}
  }
  
  export default useGetBRNPosts
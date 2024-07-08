import { Route, Routes, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage"
import PageLayout from "./Layouts/PageLayout/PageLayout"
import { auth } from "./FireBase/FireBase"
import { useAuthState } from "react-firebase-hooks/auth";
import useAuthStore from "./store/useAuthStore"
import Students from "./pages/DashBoard/Students"
import data from  './data'
// import { data, data } from "./data"
// import {readFile} from 'fs/promises'
// import { createRequire } from "module"

function App() {
  // const fs = require('fs')
  // const data = JSON.parse(fs.readFileSync('data.json'))
  // const users = data.users;
  // consolo.log(users)
  // const authUser = useAuthStore(state => state.user)
  // data.students[1].id = 18902
  // console.log(data)
  // const json = JSON.parse(readFile(new URL('./data.json', import.meta.URL)))
  // console.log(json[0])
  // const require = createRequire(import.meta.url)
  // const data = require('./data.json')
  // console.log(data[0])
// localStorage.setItem('students', JSON.stringify(data))

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth" element={<AuthPage/>}  />
        <Route path="/students" element={<Students/>} />
      </Routes>
    </PageLayout>
  )
}

export default App

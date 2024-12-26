import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/usercomponents/Layout'
import Homepage from './pages/userpage/Homepage'
import AdminHeader from './components/admincomponents/AdminHeader'
import AdminDashboard from './pages/adminpages/AdminDashboard'
import AddBlog from './pages/adminpages/AddBlog'
import Register from './pages/userpage/Register'
import Login from './pages/userpage/Login'
import BlogList from './pages/adminpages/BlogList'

const Myroutes = () => {
  return (
    <React.Fragment>
        <Router>
          <Routes>
            {/* normal user */}
            <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            

            </Route>
            <Route path='/admin/' element= {<AdminHeader/>}>
            <Route index element={<AdminDashboard/>}/>
            <Route path='addblog' element={<AddBlog/>}/>
            <Route path='listblog' element={<BlogList/>}/>

            
            </Route>
          </Routes>
        </Router>
    </React.Fragment>
  )
}

export default Myroutes
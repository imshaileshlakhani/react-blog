import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import BlogDetail from './pages/blogDetail/BlogDetail'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Dashboard from './pages/admin/dashboard/Dashboard'
import NewBlog from './pages/admin/newBlog/NewBlog'
import UserList from './pages/admin/userList/UserList'
import UserDetail from './pages/admin/userDetail/UserDetail'
import Notification from './pages/admin/notification/Notification'
import AdminBlog from './pages/admin/blog/Blog'
import Category from './pages/admin/category/Category'
import PrivateRoute from './components/PrivateRoute'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* user routes */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<PrivateRoute Com={Login} />} />
        <Route path='/register' element={<PrivateRoute Com={Register} />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:blogId' element={<BlogDetail />} />

        {/* admin routes */}
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/users' element={<UserList />} />
        <Route path="/admin/notification" element={<Notification />} />
        <Route path="/admin/blog" element={<AdminBlog />} />
        <Route path="/admin/new" element={<NewBlog />} />
        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/users/:userId" element={<UserDetail />} />
        <Route path="/admin/edit/:blogId" element={<NewBlog />} />

        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;

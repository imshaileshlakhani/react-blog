import './userList.scss'
import Navbar from '../../../components/adminNavbar/AdminNavbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import Datatable from '../../../container/datatable/Datatable'

const UserList = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default UserList
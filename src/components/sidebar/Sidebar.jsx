import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to='/admin' style={{ textDecoration: "none" }}>
                    <span className="logo">Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/admin' style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className='icon' /><span>Dashboard</span>
                        </li>
                    </Link>
                    
                    <p className="title">LISTS</p>
                    <Link to='/admin/users' style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineOutlinedIcon className='icon' /><span>Users</span>
                        </li>
                    </Link>
                    <Link to='/admin/blog' style={{ textDecoration: "none" }}>
                        <li>
                            <StickyNote2Icon className='icon' /><span>Blogs</span>
                        </li>
                    </Link>
                    <Link to='/admin/notification' style={{ textDecoration: "none" }}>
                        <li>
                            <NotificationsOutlinedIcon className='icon' /><span>Notifications</span>
                        </li>
                    </Link>

                    <p className="title">USEFUL</p>
                    <Link to='/admin/new' style={{ textDecoration: "none" }}>
                        <li>
                            <AddPhotoAlternateIcon className='icon' /><span>Add Blog</span>
                        </li>
                    </Link>
                    <Link to='/admin/category' style={{ textDecoration: "none" }}>
                        <li>
                            <CategoryIcon className='icon' /><span>Add Category</span>
                        </li>
                    </Link>

                    <p className="title">SERVICE</p>
                    <li><SettingsSystemDaydreamOutlinedIcon className='icon' /><span>System Health</span></li>
                    <li><PsychologyOutlinedIcon className='icon' /><span>Logs</span></li>
                    <li><SettingsApplicationsOutlinedIcon className='icon' /><span>Settings</span></li>

                    <p className="title">USER</p>
                    <li><AccountCircleOutlinedIcon className='icon' /><span>Profile</span></li>
                    <li><ExitToAppOutlinedIcon className='icon' /><span>Logout</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
import './navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const auth = sessionStorage.getItem('userId')
    return (
        <div className='navbar'>
            <div className="navbar_logo">Tech24</div>
            <div className="navbar_nav">
                <div className="navbar_left">
                    <ul>
                        <li><span><NavLink to='/'>HOME</NavLink></span></li>
                        <li><span><NavLink to='/blog'>BLOGS</NavLink></span></li>
                        <li><span>ABOUT</span></li>
                        <li><span><a href="#contact">CONTACT</a></span></li>
                    </ul>
                </div>
                <div className="navbar_right">
                    <ul>
                        {
                            auth ?
                                <li>
                                    <span>
                                        < NavLink to='/login' onClick={() => sessionStorage.clear()}>LOGOUT</NavLink>
                                    </span>
                                </li> :
                                <>
                                    <li><span><NavLink to='/login'>LOGIN</NavLink></span></li>
                                    <li><span><NavLink to='/register'>REGISTER</NavLink></span></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
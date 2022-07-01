import './notification.scss'
import Navbar from '../../../components/adminNavbar/AdminNavbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import Message from '../../../components/message/Message'
import { useGetContactQuery } from '../../../services/contactApi'

const Notification = () => {
    const { data, isSuccess, isError } = useGetContactQuery()
    return (
        <div className='admin_notification'>
            <Sidebar />
            <div className="notificationContainer">
                <Navbar />
                <div className="heading">
                    <h1>Notifications</h1>
                </div>
                <div className="container">
                    {isError && <h2>Error</h2>}
                    {isSuccess && data.map(element => (
                        <Message key={element.id} data={element} />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Notification
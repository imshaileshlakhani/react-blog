import './message.scss'
import { useDeleteContactMutation } from '../../services/contactApi'

const Message = ({ data }) => {
    const [deleteContact] = useDeleteContactMutation()
    return (
        <div className="notification">
            <div className="deleteButton" onClick={() => deleteContact(data.id)}>Delete</div>
            <div className="id detail">
                <span>No: {data.id}</span>
            </div>
            <div className="name detail">
                <span>Name: {data.name}</span>
            </div>
            <div className="email detail">
                <span>Email: {data.email}</span>
            </div>
            <div className="subject detail">
                <span>Subject: {data.subject}</span>
            </div>
            <div className="msg detail">
                <span>Message: {data.msg}</span>
            </div>
        </div>
    )
}

export default Message
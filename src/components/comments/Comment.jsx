import './comment.scss'
import Avatar from '@mui/material/Avatar';

const Comment = ({ data }) => {
    return (
        <div className='comment'>
            <div className="avtar">
                <Avatar src="/broken-image.jpg" />
            </div>
            <div className="text">
                <div>
                    <span className='name'><b>{data.name}</b></span>
                    <span className='date'>{data.date}</span>
                </div>
                <div>
                    <span className='msg'>{data.comment}</span>
                </div>
            </div>
        </div>
    )
}

export default Comment
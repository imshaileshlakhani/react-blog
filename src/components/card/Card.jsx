import './card.scss'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDeletePostMutation } from '../../services/postApi';

const Card = ({ data }) => {
    const navigate = useNavigate()
    const [deletePost] = useDeletePostMutation()
    return (
        < div className='card'>
            <div className='img'>
                {/* <img src={data.file} alt='baner' /> */}
                <img src='../image/blog1.png' alt="..." />
            </div>
            <div className='body'>
                <h3 className='card_title'>{data.title.slice(0, 27)} {data.title.length > 27 ? '...' : ''}</h3>
                <p className='content'>{data.content.slice(0, 120)} {data.content.length > 120 ? '...' : ''}</p>
                <Button variant='contained' className='button btn_view' onClick={() => navigate(`/blog/${data.id}`)}>View</Button>
                <Button variant='contained' className='button btn_edit' onClick={() => navigate(`/admin/edit/${data.id}`)}>Edit</Button>
                <Button variant='contained' className='button btn_delete' onClick={() => deletePost(data.id)}>Delete</Button>
            </div>
        </div>
    )
}

export default Card
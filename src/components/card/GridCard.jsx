import './gridCard.scss'
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

const GridCard = ({ data }) => {
    const navigate = useNavigate()
    return (
        <div className='card'>
            <div className='img'>
                <p className="categoty">{data.category}</p>
                <img src='image/blog1.png' alt="..." />
                {/* <img src={data.file} alt="..." /> */}
            </div>
            <div className='body'>
                <h2 className='heading'>{data.title.slice(0, 20)} {data.title.length > 20 ? '...' : ''}</h2>
                <p className='content'>{data.content.slice(0, 100)} {data.content.length > 100 ? '...' : ''}</p>
                <Button variant='contained' className='read_more' onClick={() => navigate(`/blog/${data.id}`)}>
                    Read More<ArrowRightAltIcon />
                </Button>
            </div>
        </div>
    )
}

export default GridCard
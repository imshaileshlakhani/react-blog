import './home.scss'
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Navbar from '../../components/navbar/Navbar'
import BanerCarousel from '../../components/carousel/BanerCarousel'
import Carousel from '../../components/carousel/Carousel'
import Footer from '../../components/footer/Footer'
import Contact from '../../container/contact/Contact'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='home'>
            <Navbar />
            <div className="homeContainer">
                <div className="home_left"></div>
                <div className="home_center">
                    <BanerCarousel />
                    <Carousel title='Daily Blogs' type='daily' />
                    <Carousel title='Populer Blogs' type='populer' />
                    <div className="home_more_btn">
                        <Button variant='contained' className='more' onClick={() => navigate('/blog')}>
                            More<ArrowRightAltIcon />
                        </Button>
                    </div>
                    <Contact />
                </div>
                <div className="home_right"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
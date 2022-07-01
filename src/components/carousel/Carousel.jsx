import './carousel.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import GridCard from '../card/GridCard';
import { Arrow } from './BanerCarousel';
import { useGetAllPostQuery } from '../../services/postApi';
import { useEffect, useState } from 'react';
import { useGetAllLikeQuery } from '../../services/likeApi';

const Carousel = ({ title, type }) => {
    const [blogData, setBlogData] = useState([])
    const { data, isSuccess, isError } = useGetAllPostQuery()
    const { data: likeData, isSuccess: isLike } = useGetAllLikeQuery()

    useEffect(() => {
        const mostPopular = (data) => {
            let obj = {}
            var result = isLike && likeData.reduce((r, a) => {
                r[a.blogId] = r[a.blogId] || [];
                r[a.blogId].push(a);
                return r;
            }, Object.create(null));

            for (let [key, value] of Object.entries(result))
                obj[key] = value.length

            var keysSorted = Object.keys(obj).sort((a, b) => obj[a] - obj[b])

            return data.filter(element => keysSorted.slice(-4).includes(String(element.id)))
        }

        type === 'daily' ?
            isSuccess && setBlogData(data.filter(element => element.date === new Date().toDateString())) :
            isSuccess && setBlogData(mostPopular(data))

    }, [isSuccess, data, type, isLike, likeData])

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: blogData && blogData.length >= 3 ? 3 : blogData.length,
        slidesToScroll: 2,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        autoplay: true,
        autoplaySpeed: 5500,
    };
    return (
        <div className='carousel'>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <Slider {...settings} className='slider'>
                {isError && <h2>Error</h2>}
                {blogData && blogData.map(element => (
                    <GridCard data={element} key={element.id} />
                ))}
            </Slider>
        </div>
    )
}

export default Carousel
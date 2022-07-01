import './banerCarousel.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const BanerCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        autoplay: true,
        autoplaySpeed: 7000,
    };
    return (
        <div className='banerCarousel'>
            <Slider {...settings}>
                <div>
                    <img src='image/blog1.png' alt="baner" />
                </div>
                <div>
                    <img src='image/blog2.png' alt="baner" />
                </div>
                <div>
                    <img src='image/post-bg.jpg' alt="baner" />
                </div>
            </Slider>
        </div>
    )
}

export function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

export default BanerCarousel
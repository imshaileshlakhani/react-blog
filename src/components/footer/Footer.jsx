import './footer.scss'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerContainer">
                <h2 className='footer_title'>GET IN TOUCH WITH US</h2>
                <div className="links">
                    <div className="company_name">
                        <h3>COMPANY NAME</h3>
                        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="useful_links">
                        <h3>USEFUL LINKS</h3>
                        <span>PROJECTS</span>
                        <span>ABOUT US</span>
                        <span>BLOG</span>
                        <span>TUTORIALS</span>
                    </div>
                    <div className="contact">
                        <h3>CONTACT</h3>
                        <div className='contactDetails'>
                            <span className='footer_icon'><HomeIcon fontSize='medium' /></span>
                            <span>San Francisco, CA 94126, USA</span>
                        </div>
                        <div className='contactDetails'>
                            <span className='footer_icon'><MailIcon fontSize='medium' /></span>
                            <span>tech24@gmail.com</span>
                        </div>
                        <div className='contactDetails'>
                            <span className='footer_icon'><LocalPhoneIcon fontSize='medium' /></span>
                            <span>+ 91 80367 97610</span>
                        </div>
                        <div className='contactDetails'>
                            <span className='footer_icon'><LocalPrintshopIcon fontSize='medium' /></span>
                            <span>+ 91 80367 97610</span>
                        </div>
                    </div>
                </div>
                <div className="social">
                    <h3>FOLLOW US</h3>
                    <div className="social_widget">
                        <div><FacebookIcon /></div>
                        <div><InstagramIcon /></div>
                        <div><TwitterIcon /></div>
                        <div><LinkedInIcon /></div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                © 2020 Copyright: tech24.com
            </div>
        </div>
    )
}

export default Footer
import './contact.scss'
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ToastContainer, toast } from 'react-toastify';
import { useAddContactMutation } from '../../services/contactApi';
import { useState } from 'react';

const Contact = () => {
    const [details, setDetails] = useState({ name: '', email: '', subject: '', msg: '' })
    const [addContact] = useAddContactMutation()

    const handleState = (e) => {
        setDetails(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const handleSubmit = () => {
        if (details.name && details.email && details.subject && details.msg) {
            addContact(details)
            setDetails({ name: '', email: '', subject: '', msg: '' })
            toast.success("Message Send successfully")
        }
        else {
            toast.error("Please Fill The Details")
        }
    }

    return (
        <div className='contact' id='contact'>
            <ToastContainer />
            <h1>Contact us</h1>
            <p>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
            <div className="contactContainer">
                <div className="contact_left">
                    <input type="text" name="name" placeholder='Your name' value={details.name} onChange={(e) => handleState(e)} />
                    <input type="text" name="email" placeholder='Your email' value={details.email} onChange={(e) => handleState(e)} />
                    <input type="text" name="subject" placeholder='Subject' value={details.subject} onChange={(e) => handleState(e)} />
                    <textarea cols='20' name="msg" placeholder='Your message' value={details.msg} onChange={(e) => handleState(e)} />
                    <Button variant='contained' className='send' onClick={() => handleSubmit()}>SEND</Button>
                </div>
                <div className="contact_right">
                    <div className="location">
                        <span><LocationOnIcon fontSize='large' /></span>
                        <span>San Francisco, CA 94126, USA</span>
                    </div>
                    <div className="phone">
                        <span><LocalPhoneIcon fontSize='large' /></span>
                        <span>+ 91 80367 97610</span>
                    </div>
                    <div className="mail">
                        <span><MailIcon fontSize='large' /></span>
                        <span>tech24@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
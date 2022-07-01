import './login.scss'
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup'
import Navbar from '../../components/navbar/Navbar'
import InputField from '../../components/inputField/InputField'
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik'
import { useGetAllUserQuery } from '../../services/userApi'

const Login = () => {
    const navigate = useNavigate()
    const { data: userData, isSuccess } = useGetAllUserQuery()
    
    const validate = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required'),
    })

    const userAuth = (value) => {
        try {
            const auth = isSuccess && userData.filter(user => (user.email === value.email && user.password === value.password))
            if (auth[0]) {
                sessionStorage.setItem('userId', auth[0].id)
                sessionStorage.setItem('username', `${auth[0].firstName} ${auth[0].lastName}`)
                navigate('/')
            } else {
                toast.error("Invalid username and password");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='login'>
            <Navbar />
            <ToastContainer />
            <div className="loginContainer">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={validate}
                    onSubmit={(value, { setSubmitting }) => {
                        setTimeout(() => {
                            userAuth(value)
                            setSubmitting(false)
                        }, 1000)
                    }}
                >
                    {
                        formik => (
                            <div>
                                <h1>SIGN IN</h1>
                                <Form>
                                    <InputField label="Email" name="email" type="email" />
                                    <InputField label="password" name="password" type="password" />
                                    <button>{formik.isSubmitting ? 'LOADING...' : 'LOGIN'}</button>
                                    <p>
                                        <NavLink style={{ color: 'black' }} to="/register">CREATE A NEW ACCOUNT</NavLink>
                                    </p>
                                </Form>
                            </div>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default Login
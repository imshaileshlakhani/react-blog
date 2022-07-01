import './register.scss'
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup'
import InputField from '../../components/inputField/InputField'
import Navbar from '../../components/navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik'
import { useAddUserMutation, useGetAllUserQuery } from '../../services/userApi'

function Register() {
    const navigate = useNavigate()
    const { data: userData, isSuccess } = useGetAllUserQuery()
    const [addUser] = useAddUserMutation()

    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(15, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Required')
    })

    function registerUser(value) {
        try {
            const auth = isSuccess && userData.filter(user => user.email === value.email)
            if (!auth[0]) {
                addUser(value)
                navigate('/login')
            } else {
                toast.error("user already exist");
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='register'>
            <Navbar />
            <ToastContainer />
            <div className="registerContainer">
                <Formik initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                    validationSchema={validate}
                    onSubmit={(value, { setSubmitting }) => {
                        setTimeout(() => {
                            registerUser(value)
                            setSubmitting(false)
                        }, 1000)
                    }}
                >
                    {formik => (
                        <div>
                            <h1>CREATE AN ACCOUNT</h1>
                            <Form>
                                <InputField label="First Name" name="firstName" type="text" />
                                <InputField label="Last Name" name="lastName" type="text" />
                                <InputField label="Email" name="email" type="email" />
                                <InputField label="password" name="password" type="password" />
                                <InputField label="Confirm Password" name="confirmPassword" type="password" />
                                <button>{formik.isSubmitting ? 'LOADING...' : 'CREATE'}</button>
                                <p>
                                    <NavLink style={{ color: 'black' }} to="/login">ALREADY HAVE AN ACCOUNT</NavLink>
                                </p>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Register
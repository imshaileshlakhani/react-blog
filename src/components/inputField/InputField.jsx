import './inputField.scss'
import { ErrorMessage, useField } from 'formik'

function TextField({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <div className='inputContainer'>
            <label htmlFor={field.name}>{label}</label>
            <input className={`inputField ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="on" />
            <ErrorMessage component='div' name={field.name} className="error" />
        </div>
    )
}

export default TextField
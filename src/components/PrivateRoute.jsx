import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ Com }) {
    const currentUser = sessionStorage.getItem('userId')
    return (
        !currentUser ? <Com /> : <Navigate to="/" />
    )
}

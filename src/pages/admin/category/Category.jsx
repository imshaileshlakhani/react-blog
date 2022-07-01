import './category.scss'
import Sidebar from '../../../components/sidebar/Sidebar'
import Navbar from '../../../components/adminNavbar/AdminNavbar'
import { useState } from 'react'
import { useAddCategoryMutation } from '../../../services/postApi';
import { ToastContainer, toast } from 'react-toastify';

const Category = () => {
    const [category, setCategory] = useState('')
    const [addCategory] = useAddCategoryMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (category) {
            addCategory({ category })
            setCategory('')
            toast.success("New Category Added")
        }
        else {
            toast.error("Please Fill The Details")
        }
    }

    return (
        <div className='category'>
            <Sidebar />
            <ToastContainer />
            <div className="categoryContainer">
                <Navbar />
                <div className="heading">
                    <h1>Add Category</h1>
                </div>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="formInput">
                            <label>Category</label>
                            <input type='text' placeholder='Enter Blog Category' name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                        </div>
                        <button>ADD</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Category
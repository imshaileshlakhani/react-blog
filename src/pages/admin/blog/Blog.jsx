import './blog.scss'
import Navbar from '../../../components/adminNavbar/AdminNavbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import Card from '../../../components/card/Card';
import { useGetAllPostQuery } from '../../../services/postApi';

const Blog = () => {
    const { data, isSuccess, isError } = useGetAllPostQuery()
    return (
        <div className='admin_blog'>
            <Sidebar />
            <div className="admin_blogContainer">
                <Navbar />
                <div className="heading">
                    <h1>Blogs</h1>
                </div>
                <div className="blog_container">
                    {isError && <h2>Error while fetching</h2>}
                    {isSuccess && data.map(element => (
                        <Card key={element.id} data={element} />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Blog
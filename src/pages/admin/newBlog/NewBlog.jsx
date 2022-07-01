import "./newBlog.scss";
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/adminNavbar/AdminNavbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {
  useAddPostMutation, useEditPostMutation,
  useGetAllCategoryQuery, useGetPostByIdQuery
} from "../../../services/postApi";

const NewBlog = () => {
  const [post, setPost] = useState({ title: '', content: '', file: '', category: '', date: '', id: '' });
  const { blogId } = useParams()
  const { data: postData, isSuccess: isPost } = useGetPostByIdQuery(blogId)
  const { data, isSuccess } = useGetAllCategoryQuery()
  const [editPost] = useEditPostMutation()
  const [addPost] = useAddPostMutation()

  useEffect(() => {
    blogId && isPost && setPost({ ...postData, id: String(postData.id) })
  }, [blogId, isPost, postData])

  const handleState = (e) => {
    const type = e.target.type
    const value = type === 'file' ? URL.createObjectURL(e.target.files[0]) : e.target.value
    setPost(prev => ({
      ...prev,
      [e.target.name]: value,
      date: new Date().toDateString()
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (post.title && post.content && post.file && post.category && post.category !== 'Select Category') {
      blogId ? editPost(post) : addPost(post)
      setPost({ title: '', content: '', file: '', category: '', date: '', id: '' })
      blogId ? toast.success("Blog Updated") : toast.success("New Blog Posted")
    }
    else {
      toast.error("Please Fill The Details")
    }
  }

  const { file, title, content, category } = post
  return (
    <div className="new">
      <Sidebar />
      <ToastContainer />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Blog</h1>
        </div>
        <div className="bottom">
          <form onSubmit={handleSubmit}>
            <div className="formInput">
              <label>Title</label>
              <input type='text' placeholder='Enter Blog Title' name="title" value={title} onChange={(e) => handleState(e)} />
            </div>
            <div className="formInput">
              <label>Category</label>
              <select name='category' id='category' value={category} onChange={(e) => handleState(e)}>
                <option value='Select Category'>Select Category</option>
                {isSuccess && data.map(element => (
                  <Fragment key={element.id}>
                    <option value={element.category}>{element.category}</option>
                  </Fragment>
                ))}
              </select>
            </div>
            <div className="formInput">
              <label>Content</label>
              <textarea placeholder='Enter Blog Content' name="content" value={content} onChange={(e) => handleState(e)} />
            </div>

            <div className="formInput">
              <label htmlFor="file">
                Choose Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input type="file" id="file" name="file" onChange={(e) => handleState(e)} style={{ display: "none" }} />
              <div className="preview">
                <img src={
                  file ? file
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                  alt="..." />
              </div>
            </div>

            <button>POST</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;

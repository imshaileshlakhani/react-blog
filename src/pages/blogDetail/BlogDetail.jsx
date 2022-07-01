import './blogDetail.scss'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Comment from '../../components/comments/Comment';
import Button from '@mui/material/Button';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../services/postApi';
import { useAddCommentMutation, useGetCommentsByBlogIdQuery } from '../../services/commentApi';
import { useAddLikeMutation, useGetLikeByUserAndBlogIdQuery, useRemoveLikeMutation } from '../../services/likeApi';
import { useEffect } from 'react';

const BlogDetail = () => {
    const userId = sessionStorage.getItem('userId')
    const username = sessionStorage.getItem('username')
    const [like, setLike] = useState([])
    const [comment, setComment] = useState('')
    const { blogId } = useParams()
    const { data: postData, isError, isSuccess } = useGetPostByIdQuery(blogId)
    const { data: commentData } = useGetCommentsByBlogIdQuery(blogId)
    const { data: likeData, isSuccess: isLike } = useGetLikeByUserAndBlogIdQuery({ blogId, userId })
    const [addComment] = useAddCommentMutation()
    const [addLike] = useAddLikeMutation()
    const [removeLike] = useRemoveLikeMutation()

    const handleComment = () => {
        userId ?
            comment ?
                addComment({ comment, blogId, name: username, date: new Date().toDateString() }) :
                toast.error("Please Fill The Details")
            : toast.error("Login First")

        setComment('')
    }

    useEffect(() => {
        isLike && likeData && setLike(likeData)
    }, [isLike, likeData])

    const handleLike = () => {
        userId ?
            like.length !== 0 ?
                removeLike(like[0].id) :
                addLike({ blogId, userId, like: true })

            : toast.error("Login First")
    }

    return (
        <div className='single'>
            <Navbar />
            <ToastContainer />
            <div className="singleContainer">
                {isError && <h2>Error</h2>}
                {isSuccess &&
                    <>
                        <div className="img">
                            {/* <img src={postData.file} alt="..." /> */}
                            <img src="../image/post-bg.jpg" alt="..." />
                        </div>
                        <div className="single_content">
                            <h2 className="content_title">{postData.title}</h2>
                            <p className="post_date">~ Last updated {postData.date}</p>
                            <p className="post_category">~ {postData.category} blog</p>
                            <p className='content_para'>{postData.content}</p>
                            <div className="comment_like">
                                <h2 className='comment_section'>Comment Section</h2>
                                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} className='comment_box' placeholder='Comment' />
                                <Button variant='contained' className='comment_btn' color='error' onClick={() => handleComment()}>
                                    <span>COMMENT</span>
                                    <span><ChatRoundedIcon /></span>
                                </Button>
                                <Button variant='contained' className='like_btn' style={likeData && { backgroundColor: like.length !== 0 ? 'blue' : 'gray' }} onClick={() => handleLike()}>
                                    <span>LIKE</span>
                                    <span><ThumbUpIcon /></span>
                                </Button>
                                <div className="commentContainer">
                                    <h2 className='comment_section'>Comments({commentData && commentData.length})</h2>
                                    {commentData && (
                                        commentData.map(element => (
                                            < Comment key={element.id} data={element} />
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>

            <Footer />
        </div>
    )
}

export default BlogDetail
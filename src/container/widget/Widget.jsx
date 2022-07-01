import './widget.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import MessageIcon from '@mui/icons-material/Message';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useGetAllPostQuery } from '../../services/postApi';
import { useGetCommentsQuery } from '../../services/commentApi';
import { useGetAllUserQuery } from '../../services/userApi'
import { useGetAllLikeQuery } from '../../services/likeApi';

const Widget = ({ type }) => {
    const { data: postData, isSuccess: isPost } = useGetAllPostQuery()
    const { data: commentData, isSuccess: isComment } = useGetCommentsQuery()
    const { data: userData, isSuccess: isUser } = useGetAllUserQuery()
    const { data: likeData, isSuccess: isLike } = useGetAllLikeQuery()
    let widgetData;

    switch (type) {
        case "user":
            widgetData = {
                title: "USERS",
                amount: isUser ? userData.length : 0,
                icon: (
                    <PersonOutlineIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "blog":
            widgetData = {
                title: "BLOGS",
                amount: isPost ? postData.length : 0,
                icon: (
                    <StickyNote2Icon
                        className="icon"
                        style={{
                            backgroundColor: "rgba(218, 165, 32, 0.2)",
                            color: "goldenrod",
                        }}
                    />
                ),
            };
            break;
        case "like":
            widgetData = {
                title: "LIKE",
                amount: isLike ? likeData.length : 0,
                icon: (
                    <ThumbUpIcon
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                ),
            };
            break;
        case "comment":
            widgetData = {
                title: "COMMENTS",
                amount: isComment ? commentData.length : 0,
                icon: (
                    <MessageIcon
                        className="icon"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{widgetData.title}</span>
                <span className="counter">
                    {widgetData.amount}
                </span>
            </div>
            <div className="right">
                <div className="percentage"></div>
                {widgetData.icon}
            </div>
        </div>
    )
}

export default Widget
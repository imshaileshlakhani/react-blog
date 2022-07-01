import "./userDetail.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/adminNavbar/AdminNavbar";
import { useParams } from "react-router-dom";
import { useGetUserByIDQuery } from "../../../services/userApi";

const UserDetail = () => {
  const { userId } = useParams()
  const { data, isSuccess, isError } = useGetUserByIDQuery(userId)
  
  return (
    <div className="single_user">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="heading">
          <h1>Information</h1>
        </div>
        {isError && <h2>Error</h2>}
        {isSuccess && (
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">{data.firstName + ' ' + data.lastName}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{data.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 2345 67 89</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">
                      Elton St. 234 Garden Yd. NewYork
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;

import './dashboard.scss'
import Chart from '../../../container/chart/Chart'
import Featured from '../../../container/featured/Featured'
import Navbar from '../../../components/adminNavbar/AdminNavbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import Widget from '../../../container/widget/Widget'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar />
            <div className="dashboardContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="blog" />
                    <Widget type="like" />
                    <Widget type="comment" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Views)" aspect={2 / 1} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
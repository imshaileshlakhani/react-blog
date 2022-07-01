import './blog.scss'
import BallotIcon from '@mui/icons-material/Ballot';
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ListCard from '../../components/card/ListCard'
import GridCard from '../../components/card/GridCard';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from 'react';
import { useGetPostOfPageQuery, useGetPostByCategoryQuery, useGetAllPostQuery, useGetAllPostByCategoryQuery } from '../../services/postApi';

const Blog = () => {
    const [value, setValue] = useState('')
    const [data, setData] = useState([])
    const [view, setView] = useState(true)
    const [page, setPage] = useState(1)
    const { data: total, isSuccess: isTotal } = useGetAllPostQuery()
    const { data: totalByCategory, isSuccess: isTotalByCategory } = useGetAllPostByCategoryQuery(value)
    const { data: postData, isSuccess, isError } = useGetPostOfPageQuery(page)
    const { data: searchData, isSuccess: isSearch } = useGetPostByCategoryQuery({ value, page })

    useEffect(() => {
        !value && isSuccess && setData(postData)
        value && isSearch && setData(searchData)
    }, [isSuccess, postData, value, isSearch, searchData])

    const handleNext = () => {
        !value ?
            isTotal && page >= total.length / 2 ? Math.ceil(total.length / 2) : setPage(prev => prev + 1) :
            isTotalByCategory && page >= totalByCategory.length / 2 ? Math.ceil(totalByCategory.length / 2) : setPage(prev => prev + 1)
    }

    const handleSearch = (e) => {
        setValue(e.target.value)
        setPage(1)
    }

    const display = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }

    return (
        <div className='blog'>
            <Navbar />
            <div className="blogContainer">
                <div className="left"></div>
                <div className="center">
                    <div className="action_header">
                        <div className="layout_btn">
                            <div className="grid_view" onClick={() => setView(false)}><GridViewRoundedIcon /></div>
                            <div className="list_view" onClick={() => setView(true)}><BallotIcon /></div>
                        </div>
                        <div className="searchContainer">
                            <input type="text" name="search" placeholder='Search by category' value={value} onChange={(e) => handleSearch(e)} />
                        </div>
                    </div>
                    <div className="blog_list" style={!view ? display : {}}>
                        {isError && <h2>Error</h2>}
                        {isSuccess &&
                            data.length === 0 ?
                            <h2 className='blog_notFound'>No Blog Found</h2> :
                            data.map(element => (
                                view ?
                                    <ListCard data={element} key={element.id} /> :
                                    <GridCard data={element} key={element.id} />
                            ))}
                    </div>
                    <div className="pagination">
                        <div className="total_record">
                            <p>Total &nbsp;
                                <b>{!value ? isTotal && total.length : isTotalByCategory && totalByCategory.length}</b>
                                &nbsp; Blog Found
                            </p>
                        </div>
                        <div className="btn_container">
                            <button className="prev" disabled={page <= 1} onClick={() => setPage(prev => prev - 1)}><ArrowBackIosNewIcon /></button>
                            <button className="next" onClick={() => handleNext()}><ArrowForwardIosIcon /></button>
                        </div>
                    </div>
                </div>
                <div className="right"></div>
            </div>
            <Footer />
        </div >
    )
}

export default Blog
import React, {useEffect}  from 'react';
import { Link, Redirect, useParams} from 'react-router-dom';
import "./css/home.css";
import data from '../data';
import {useDispatch, useSelector} from 'react-redux';
import {listUsers} from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';

import MessageBox from '../components/MessageBox';
export default function HomeScreen(props) {
    const param = new URLSearchParams(props.location.search);
    const page = param.get("page");
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.userList);
    const { loading, error, users, pages } = userList;
    useEffect(() => {
        console.log(page)
        dispatch(listUsers(        
            page
            ));
    }, [dispatch, page]);
    const getFilterUrl = (filter) => {
        const filterPage = filter.page > 0 ? filter.page : filter.page === 0 ? 1 : page >= 0 ? page : 1;
        return `?page=${filterPage}`;
    }
    return(
        <div className="home">
        {loading ? (
            <LoadingBox></LoadingBox>
            ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
        ) : (
            <div>
            <table className="table_style table">
                <thead>
                <tr>
                  <th>Rank</th>
                  <th>Image</th>
                  <th>User name</th>
                  <th>Biography</th>
                  <th>Followers</th>
                  <th>Rate</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key = {user.id}>
                            <td width= "5%">{user.rank}</td>
                            <td width= "15%" ><img id="image-product-manage" src ={user.image} alt={user.name}/></td>
                            <td width="40%" className="user_name">{user.name}</td>
                            <td> {user.bio}</td>
                            <td width= "15%">{user.follower}</td>      
                            <td>{user.rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <div className="pagination-container">
                        <div className="row center pagination">
                            {[...Array(pages).keys()].map((x) => (
                            <Link
                                className={x === page ? 'active' : ''}
                                key={x}
                                to={getFilterUrl({page: x+1})}
                            >
                                <li className='page-item'>
                                    <span>
                                        {x+1} 
                                    </span>
                                </li>
                            </Link>
                        ))}
                </div>
                </div>
            </div>

        )}
    </div>

    );


}
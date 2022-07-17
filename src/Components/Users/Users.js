import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './User.css'

let page_number = 0;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(page_number);
  const getUserList = ()=>{
    setPage(page+1)
    axios.get(`https://randomuser.me/api/?page=${page}&results=10`)
    .then(res => {
        const mergedUsers = [...users, ...res.data.results];
        setUsers(mergedUsers);
    })
  }
  useEffect(() => {
    getUserList()
  }, []);

  const fetchMoreData = () => {
    getUserList()
  };
  return (
    <InfiniteScroll
      dataLength={users?.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<Skeleton duration={1}  height={30} count={10} />}
    >
      {users?.length > 0 &&
        users.map((user) => {
          return (
            <div
              className="container d-flex mb-2 justify-content-between"
              key={user?.login?.uuid}
            >
              <img
                className="rounded-circle "
                src={user?.picture?.medium}
                alt="user"
              />
              <div className="name">
                <h3>
                  {user.name.title} {user.name.first} {user.name.last}
                </h3>
                <p>{user?.email}</p>
              </div>
              <div>
                <p>Phone: {user.phone}</p>
                <p>Cell: {user.cell}</p>
              </div>
            </div>
          );
        })}
    </InfiniteScroll>
  );
};

export default Users;

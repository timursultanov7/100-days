import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import "../styles/loadMore.css";

const LoadMore = () => {
  const [randomUsers, setRandomUsers] = useState([]);

  const [errMsg, setErrMsg] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(0);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const getRandomUsers = async () => {
    try {
      const res = await fetch(
        `https://randomuser.me/api/?page=${page}&results=4`
      );

      const data = await res.json();

      setRandomUsers([...randomUsers, ...data.results]);
      setErrMsg("");
    } catch (err) {
      console.log(err);
      setErrMsg("Error while loading data. Try again later");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRandomUsers();
  }, [page]);

  return (
    <div className="users-wrapper">
      <div className="heading">
        <h1>Random Users</h1>
        <p>
          Click on the button below and you will get 4 more random users from
          API
        </p>
      </div>

      {errMsg && <p className="error-msg">{errMsg}</p>}
      {isLoading ? "" : <UserCard results={randomUsers} />}
      <div className="load-more">
        <button className="load-more-btn" onClick={loadMore}>
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default LoadMore;

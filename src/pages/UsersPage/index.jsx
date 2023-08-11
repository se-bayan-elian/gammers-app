/* eslint-disable eqeqeq */
import React, { useDeferredValue, useEffect, useState } from "react";
import Table from "../../components/Table";
import { TABLE_COLUMNS } from "../../constants/TableColumns";
import { Typography } from "../../components/Typography";
import styles from "./style.module.css";
import UseApi from "../../hooks/useApi";
import { AUTH_API } from "../../config/api";
import { AUTH_API_ENDPOINT } from "../../routes/paths";

const UsersPage = () => {
  const [num, setNum] = useState(1);
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(10);
  const deferredQuery = useDeferredValue(search);

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const pageQuery = `&page=${num}`;
  const searchQuery = search ? `&q=${deferredQuery}` : "";
  const sizeQuery = `?size=${size}`;

  const { getUsers, users, isLoading, deleteUser } = UseApi(
    AUTH_API + AUTH_API_ENDPOINT.USERS + sizeQuery + searchQuery + pageQuery,
    config
  );

  const prevSubmit = () => {
    setNum((prev) => (num > 1 ? prev - 1 : num));
  };
  const nextSubmit = () => {
    setNum((prev) => (num <= users.pages ? prev + 1 : num));
  };
  const onDeleteHandler = (id) => {
    deleteUser(id);
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deferredQuery, size, num]);

  return (
    <div className={styles.users}>
      <Typography variant={"h3"}>Users</Typography>
      <div className={styles.search}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="Search"
        />
        <select onChange={(e) => setSize(e.target.value)} name="size">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <Table
        columns={TABLE_COLUMNS(onDeleteHandler)}
        data={users?.users}
        isLoading={isLoading}
      />
      <div className={styles.pagination_buttons}>
        <button onClick={prevSubmit} disabled={users.page == 1 ? true : false}>
          prev
        </button>
        <button>{users.page}</button>
        <button
          onClick={nextSubmit}
          disabled={users.page == users.pages ? true : false}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default UsersPage;

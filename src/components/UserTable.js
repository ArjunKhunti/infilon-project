import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../services/api.services";
import EditableTable from "./EditableTable";

const UserTable = () => {
  const usersData = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users"));
    console.log(localUsers);
    if (localUsers) {
      dispatch({
        type: "REPLACE_USERS",
        users: [...localUsers],
      });
    } else {
      fetchUsersData().then((res) => {
        dispatch({
          type: "REPLACE_USERS",
          users: [...res.data.data],
        });
      });
    }
  }, []);

  const saveHandler = (updatedUser) => {
    dispatch({ type: "EDIT_USER", updatedUser });
  };

  const deleteHandler = (userId) => {
    dispatch({ type: "DELETE_USER", id: userId });
  };

  return (
    <EditableTable
      data={usersData}
      onSave={saveHandler}
      onDelete={deleteHandler}
    />
  );
};

export default UserTable;

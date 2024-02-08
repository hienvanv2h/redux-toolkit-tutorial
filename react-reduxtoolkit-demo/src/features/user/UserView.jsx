import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const usersState = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
      <h2>List of Users: </h2>
      {usersState.loading && <div>Loading...</div> }
      {!usersState.loading && usersState.error
      && <div>Error: {usersState.error}</div>  }
      {!usersState.loading && usersState.users.length > 0
      && <ul>
        {usersState.users.map(user => (
          <li key={user.id}>Id: {user.id} - Name: {user.name}</li>
        ))}
      </ul> }
    </div>
  );
};

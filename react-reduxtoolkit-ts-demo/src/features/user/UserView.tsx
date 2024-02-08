import { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const UserView = () => {
  const usersState = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
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

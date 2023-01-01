import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Button from "./Button";
import useThunk from "../hooks/use-thunk";
import Skeleton from "./Skeleton";
import UserListItem from "./UserListItem";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doAddUser, isCreateUser, creatingUserError] = useThunk(addUser);

  //   const { isLoading, data, error } = useSelector((state) => {
  //     return state.users;
  //   });

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  //   if (isLoading) {
  //     return <Skeleton times={6} className="h-10 w-full" />;
  //   }

  //   if (error) {
  //     return <div>Error fetching data...</div>;
  //   }

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  const handleAddUser = () => {
    doAddUser();
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreateUser} onClick={handleAddUser}>
          + Add Users
        </Button>
        {creatingUserError && "Error creating user..."}
      </div>
      {content}
    </div>
  );
}

export default UsersList;

import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const users = useSelector((state) => state.todoss.users);
  console.log(users);

  return (
    <div>
      {users.map((users) => (
        <div key={users.id}>
          {users.userName}
          {users.password}
        </div>
      ))}
      {/* paban */}
    </div>
  );
};

export default UserProfile;

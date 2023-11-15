import { useState, useEffect } from "react";
import iUserData from "./usertype";
import "./userlist.css";

function UserList() {
  const [userDetail, setUserDetail] = useState<iUserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json(); // the data will now be the array of users

      setUserDetail([...data]);

      console.log(data); // here you will get the data
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      {userDetail.map((user, index) => (
        <div className="card" key={index}>
          <div>
            <strong>id</strong>: {user.id}
          </div>
          <div>
            <strong>name</strong> : {user.name}
          </div>
          <div>
            <strong>username</strong> : {user.username}
          </div>
          <div>
            <strong>email</strong> : {user.email}
          </div>
          <div>
            <strong>phone</strong>: {user.phone}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;

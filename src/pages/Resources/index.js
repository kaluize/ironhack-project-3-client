import axios from "axios";
import { useState, useEffect } from "react";


export function Home (){
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("http://localhost:8080/user/all-users");
        setUsers(response.data)
        setIsLoading(false)
      } catch (error) {
          console.log(error)
      }
    }

    fetchUsers();
  }, [])

  console.log(users)

  return (
    <div>
      {!isLoading && (
        <>
          {users.map((user) => {
            return (
              <div>
                {user.name} - {user.idNumber} - {user.email}
              </div>
            )
          })}
        </>
      )}
    </div>
  );
}

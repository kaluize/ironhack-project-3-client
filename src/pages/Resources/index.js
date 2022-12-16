import { api } from "../../../api/api";
import { useState, useEffect } from "react";

function Resources() {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchResources() {
      try {
        const response = await await api.get("/user/all-users");
        setResources(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchResources();
  }, []);

  console.log(resources);

  return (
    <div>
      {!isLoading && (
        <>
          {resources.map((user) => {
            return (
              <div>
                {user.name} - {user.idNumber} - {user.email}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Resources;

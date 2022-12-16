import { api } from "../../api/api";
import { useState, useEffect } from "react";
import NewResourceModal from "../../components/ResourceComponents/NewResourceModal.js";



export function Resources(){
  const [resources, setResources] = useState([]);
  //const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    async function fetchResources() {
      try {
        const response = await api.get("/resource/all-resource");
        setResources(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResources();
  }, []);

  return (
    <div>
      {!isLoading && (
        <>
          <h3>Recursos cadastrados</h3>
          <NewResourceModal />
          {resources.map((resource) => {
            return (
              <div key={resource._id}>
                {resource.name} - {resource.assessmentNumber}
              </div>
            )
          })}
        </>
      )}
    </div>
  );
}

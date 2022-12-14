import { useState, useEffect } from "react";
import api from "../../../api/api";
import { Link } from "react-router-dom";
//import toast from "react-hot-toast";

function MyResources() {
  const [showForm, setShowForm] = useState(false);
  const [MyResources, setMyResouces] = useState([]);
  const [form, setForm] = useState({
    resourceType: "",
    name: "",
    assessmentNumber: "",
    availableBooking: "",
  });

  useEffect(() => {
    async function fetchyResources() {
      try {
        const response = await api.get("http://localhost:3000/resources");
        setMyResouces([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchyResources();
  }, []);

  function handleReload() {
    // setReload(!reload);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("http://localhost:3000/resources", form);
    setForm({
      resourceType: "",
      name: "",
      assessmentNumber: "",
      availableBooking: "",
    });
    handleReload();
    // toast.success("Recurso criado com sucesso!");
    setShowForm(false);
  }

  return (
    <div>
      <h1>PÁGINA DE RECURSOS</h1>

      <button
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        Criar novo Recurso
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>ResourceType</label>
            <input
              type="text"
              name="resourceType"
              onChange={handleChange}
              value={form.resourceType}
            />
          </div>

          <div>
            <label>name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={form.name}
            />
          </div>

          <div>
            <label>assessmentNumber</label>
            <input
              type="text"
              name="assessmentNumber"
              onChange={handleChange}
              value={form.assessmentNumber}
            />
          </div>

          <div>
            <label>availableBooking</label>
            <input
              type="text"
              name="availableBooking"
              onChange={handleChange}
              value={form.availableBooking}
            />
          </div>

          <button type="submit">Salvar Recurso</button>
        </form>
      )}
      <button onClick={handleReload}>Editar Recurso</button>

      {MyResources.length > 14 && <p>Arquivo tem 08 recursos</p>}

      <div className="cards">
        {MyResources.map((MyResources) => {
          return (
            <div key={MyResources._id} className="card">
              <p>Recurso: {MyResources.ResourceType} </p>
              <p>name:{MyResources.gestor}</p>
              <p>assessmentNumber: {MyResources.gestor}</p>
              <Link to={`/MyResources/${MyResources._id}`}>Ver detalhes</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyResources;

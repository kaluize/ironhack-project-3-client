import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Form, Button, ThemeProvider, } from "react-bootstrap";

export function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    "name":"",
    "idNumber":"",
    "email":"",
    "password":"",
    "confirmPassword":"",
    "role":"USER",
    "resources":[],
    "booking":[],
  });

  // const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // function handleImage(e) {
  //   setImg(e.target.files[0]);
  // }

  //async function handleUpload() {
  //  try {
  //    const uploadData = new FormData();
  //    uploadData.append("picture", img);

  //  const response = await api.post("/upload-image", uploadData);

  //    return response.data.url;
  //  } catch (error) {
  //    console.log(error);
  //  }
  //}

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //const imgURL = await handleUpload();
      await api.post("/user/signup", form /*{ ...form, img: imgURL }*/);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="formName">Nome:</label>
      <input
        id="formName"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
{/*       <label htmlFor="formImg">Sua foto de perfil:</label>
      <input type="file" id="formImg" onChange={handleImage} /> */}

      <label htmlFor="formEmail">E-mail:</label>
      <input
        id="formEmail"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="formPassword">Senha:</label>
      <input
        id="formPassword"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <label htmlFor="formConfirmPassword">Confirmação de senha:</label>
      <input
        id="formConfirmPassword"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
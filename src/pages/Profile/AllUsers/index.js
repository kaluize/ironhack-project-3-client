import React, { useState, useEffect } from 'react';
//import { AuthContext } from "../../../contexts/authContext";
//import { useContext } from 'react';
import { api } from "../../../api/api";
import { Card, Button, Container, Table } from "react-bootstrap";
import EditUserModal from "../../../components/UserComponents/EditUserModal";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [isloading, setIsloading] = useState(true);

  //const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/user/all-users");
      setUsers(response.data);
      setIsloading(false)
    }

    fetchUser();
  }, []);

  async function handleDelete(userID) {
    await api.delete(`user/delete/${userID}`)
    setIsloading(false)
    window.location.reload()
  }



  return (
    
    <>
        <Container className="containerDetail">
            <Card className="cardUsers">
                <Card.Header className="cardUsersHeader">
                    <Card.Title className="cardUsersTitle">Usuários</Card.Title>
                </Card.Header>

                <Table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>ID</th>
                            <th>tipo</th>
                            <th>e-mail</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isloading &&
                        users.map((user) => {
                            return (
                            <tr key={user.email}>
                                <td>{user.name}</td>
                                <td>{user.idNumber}</td>
                                <td>{user.role}</td>
                                <td>{user.email}</td>
                                <td><EditUserModal user={user}/></td>
                                <td><Button className="modalGrayButtonUsuario" onClick={() => {
                                    handleDelete(user._id)}}>Excluir</Button>
                                </td>                                
                            </tr>
                        )})}
                    </tbody>
                </Table>
            </Card>
        </Container>
    </>
  );
}

export default AllUsers;
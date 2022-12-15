import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Table } from "react-bootstrap";
import EditUserModal from "../../../components/UserComponents/EditUserModal";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get("/user/all-users");
      setUsers(response.data);
      setIsloading(false)
    }

    fetchUser();
  }, []);

  async function handleDelete(userID) {
    await axios.put(`/delete/${userID}`)
  }



  return (
    
    <>
        <Container className="containerDetail">
            <p>Usuários</p>
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
                                <td><Button className="button-user-ex" onClick={() => {
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
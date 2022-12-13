import axios from "axios";
import { Button } from "react-bootstrap";

function DeleteUser ({userID}) {
  async function handleDelete(e) {
    
    e.preventDefault();

    try {
      await axios.delete(
        `user/delete/${userID}`
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button onClick={handleDelete} className="delete-button">
        Excluir Usuário
      </Button>
    </>
  );
}

export default DeleteUser;
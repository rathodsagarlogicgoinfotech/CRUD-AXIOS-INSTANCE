import { useEffect, useState } from "react";
import { deleteUsers, getUsers } from "../../backEndHandler/backEndHandler";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    try {
      const { data } = await getUsers({ url: "" });
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUsers({ url: `/${id}` }).then(() => getAllUsers());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <Link to="/signup">Sign Up</Link>
      <Row className="justify-content-between">
        {users.map((ele) => {
          return (
            <Col key={ele.id} className="col-xxl-4">
              <Card className="text-center my-3" style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>{ele.username}</Card.Title>
                  <Card.Text>{ele.email}</Card.Text>
                  <Button
                    className="m-2"
                    variant="danger"
                    onClick={() => handleDelete(ele.id)}
                  >
                    Delete
                  </Button>
                  <Button>
                    <Link
                      to={`/update/${ele.id}`}
                      className="m-2 text-light"
                      variant="primary"
                      style={{ textDecoration: "none" }}
                      onClick={() => handleDelete(ele.id)}
                    >
                      Update
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;

import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import CreateModal from "./create.modal";
import { useState } from "react";

interface IProps {
  recipes: IRecipe[];
}
const AppTable = (props: IProps) => {
  const { recipes } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  console.log(">>> Check props recipes: ", recipes);
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="mb-3"
      >
        <h3 className="text-success">Công thức nấu ăn</h3>
        <Button onClick={() => setShowModal(true)}>Add New Recipe</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Title</th>
            <th>Description</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => {
            return (
              <tr key={recipe.id}>
                <td>{recipe.id}</td>
                <td>{recipe.title}</td>
                <td>{recipe.description}</td>
                <td>{recipe.note}</td>
                <td>
                  <Button variant="secondary" className="mx-2">
                    View
                  </Button>
                  <Button variant="warning" className="mx-2">
                    Edit
                  </Button>
                  <Button variant="danger" className="mx-2">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CreateModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default AppTable;

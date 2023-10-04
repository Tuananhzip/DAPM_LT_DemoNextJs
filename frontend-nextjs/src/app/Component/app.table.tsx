import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import CreateModal from "./create.modal";
import { useState } from "react";
import UpdateModal from "./update.modal";
import Link from "next/link";
import { mutate } from "swr";
import { toast } from "react-toastify";
interface IProps {
  recipes: IRecipe[];
}
const AppTable = (props: IProps) => {
  const { recipes } = props;
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  const [showModalCreate, setShowModalCreated] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

  const handleDeleteRecipe = (id: number) => {
    if (confirm(`Do you want delete this recipe at id=${id}`)) {
      fetch(`http://localhost:8080/recipes/${id}`, {
        method: "DELETE", // or 'PUT'
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            toast.success("Delete recipe succeed !");
            mutate("http://localhost:8080/recipes");
          }
        });
    }
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="mb-3"
      >
        <h3 className="text-success">Công thức nấu ăn</h3>
        <Button onClick={() => setShowModalCreated(true)}>
          Add New Recipe
        </Button>
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
          {recipes.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.note}</td>
                <td>
                  <Link
                    className="btn btn-info text-light mx-2"
                    href={`/recipes/${item.id}`}
                  >
                    View
                  </Link>

                  <Button
                    variant="warning"
                    className="mx-2"
                    onClick={() => {
                      setRecipe(item);
                      setShowModalUpdate(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => handleDeleteRecipe(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <CreateModal
        showModal={showModalCreate}
        setShowModal={setShowModalCreated}
      />
      <UpdateModal
        setRecipe={setRecipe}
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        recipe={recipe}
      />
    </>
  );
};

export default AppTable;

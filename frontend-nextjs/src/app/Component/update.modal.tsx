"use client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
  showModalUpdate: boolean;
  setShowModalUpdate: (value: boolean) => void;
  recipe: IRecipe | null;
  setRecipe: (value: IRecipe | null) => void;
}
function UpdateModal(props: IProps) {
  const { showModalUpdate, setShowModalUpdate, recipe, setRecipe } = props;

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [note, setNote] = useState<string>("");

  useEffect(() => {
    if (recipe && recipe.id) {
      setId(recipe.id);
      setTitle(recipe.title);
      setDescription(recipe.description);
      setNote(recipe.note);
    }
  }, [recipe]);

  const handleSubmit = () => {
    if (!title) {
      toast.error("Not empty title !");
      return;
    }
    if (!description) {
      toast.error("Not empty description !");
      return;
    }
    if (!note) {
      toast.error("Not empty note !");
      return;
    }
    fetch(`http://localhost:8080/recipes/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, note }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          toast.success("Update recipe succeed!");
          handleCloseModal();
          mutate("http://localhost:8080/recipes"); ///hàm này giúp gọi lại API
        }
      });
  };

  const handleCloseModal = () => {
    setTitle("");
    setDescription("");
    setNote("");
    setRecipe(null); //nếu ấn x2 vào 1 recipe thì nó sẽ reset hết mấy trường kia nhưng nếu không set null cho setRecipe thì nhấn lại lần 2 sẽ vẫn là id thằng đó nhưng mà chưa reset nên phải thêm setRecipe null
    setShowModalUpdate(false);
  };
  return (
    <>
      <Modal
        show={showModalUpdate}
        onHide={() => handleCloseModal()}
        animation={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Note</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;

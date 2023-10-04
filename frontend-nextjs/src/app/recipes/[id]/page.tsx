"use client";
import { ListGroup } from "react-bootstrap";
import useSWR, { Fetcher } from "swr";

const ViewDetail = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<IRecipe, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8080/recipes/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("Check id: ", params.id);
  return (
    <>
      <div className="row">
        <div className="col-md-3" style={{ fontWeight: "bold" }}>
          <ListGroup>
            <ListGroup.Item variant="primary">ID</ListGroup.Item>
            <ListGroup.Item variant="success">Title</ListGroup.Item>
            <ListGroup.Item variant="warning">Description</ListGroup.Item>
            <ListGroup.Item variant="danger">Note</ListGroup.Item>
          </ListGroup>
        </div>
        <div className="col-md-9">
          <ListGroup>
            <ListGroup.Item variant="primary">{data?.id}</ListGroup.Item>
            <ListGroup.Item variant="success">{data?.title}</ListGroup.Item>
            <ListGroup.Item variant="warning">
              {data?.description}
            </ListGroup.Item>
            <ListGroup.Item variant="danger">{data?.note}</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  );
};
export default ViewDetail;

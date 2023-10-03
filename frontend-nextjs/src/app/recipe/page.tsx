"use client";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
const Recipe = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <>
      <h1 className="text-center text-primary">Công thức</h1>
      <Button variant="info" onClick={handleBtn} hidden={true}>
        Click me
      </Button>
    </>
  );
};
export default Recipe;

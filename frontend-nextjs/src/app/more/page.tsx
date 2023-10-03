"use client";
import { useRouter } from "next/navigation";

const More = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="text-info">
        More...
      </h1>
      <button onClick={handleBtn} hidden={true}>
        Click me
      </button>
    </>
  );
};
export default More;

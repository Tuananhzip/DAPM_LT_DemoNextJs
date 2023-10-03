"use client";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <>
      <h1
        style={{
          textAlign: "center",
        }}
        className="text-danger"
      >
        About Us
      </h1>
      <button onClick={handleBtn} hidden={true}>
        Click me
      </button>
    </>
  );
};
export default About;

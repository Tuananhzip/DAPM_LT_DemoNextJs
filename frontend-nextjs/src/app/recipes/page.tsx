"use client";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
import AppTable from "../Component/app.table";
import useSWR from "swr";

const Recipe = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/recipes",
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

  return (
    <>
      <h1 className="text-center text-primary">Công thức</h1>
      <div>
        <AppTable
          recipes={data?.sort((a: any, b: any) => b.id - a.id)}
        ></AppTable>
      </div>
    </>
  );
};
export default Recipe;

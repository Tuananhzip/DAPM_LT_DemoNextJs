"use client";
import Link from "next/link";
import AppTable from "./Component/app.table";
import { useEffect } from "react";
import useSWR from "swr";
import { Button } from "react-bootstrap";

export default function Home() {
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

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>{data?.length}</div>
      <div style={{}}>
        <AppTable recipes={data}></AppTable>
      </div>
    </>
  );
}

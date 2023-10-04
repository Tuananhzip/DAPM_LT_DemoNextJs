import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "View Detail Recipe",
  description: "View Detail Recipe by Nextjs",
};

export default function ViewDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

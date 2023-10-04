import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipe List",
  description: "List Recipe by Nextjs",
};

export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

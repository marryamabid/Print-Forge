import { getAllCategoryBySlug } from "@/app/lib/categories";
import { CategoryPageProps } from "@/app/types";

export default async function Models({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getAllCategoryBySlug(categoryName);

  return <h1>{category.displayName}</h1>;
}

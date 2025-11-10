import ModelGrid from "@/app/Components/ModelGrid";
import { getAllCategoryBySlug } from "@/app/lib/categories";
import { getModels } from "@/app/lib/model";
import { CategoryPageProps } from "@/app/types";

export default async function Models({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  console.log(categoryName);

  const model = await getModels({ category: categoryName });
  const category = getAllCategoryBySlug(categoryName);
  return (
    <>
      <ModelGrid title={` ${category.displayName}`} models={model} />
    </>
  );
}

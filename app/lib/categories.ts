import { Category } from "../types";
import catorgories from "../data/categories.json";
export function getAllCategories(): Category[] {
  return catorgories;
}
export function getAllCategoryBySlug(slug: string): Category {
  const findCategory = catorgories.find((c: Category) => c.slug === slug);
  if (!findCategory) {
    throw new Error(`Category not found with slug: ${slug}`);
  }
  return findCategory;
}
export function getDisplayNameFromSlug(slug: string): string {
  const category = getAllCategoryBySlug(slug);
  return category.displayName;
}

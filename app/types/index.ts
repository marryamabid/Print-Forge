export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  category: string;
  dateAdded: string;
  image: string;
};

export type ModelDetailsPage = {
  params: Promise<{
    id: string;
  }>;
};
export type ModelCardprops = {
  model: Model;
};
export type PillProps = {
  children: React.ReactNode;
  className?: string;
};
export type ModelGridProps = {
  title: string;
  models: Model[];
};
export type Category = {
  displayName: string;
  slug: string;
};
export type CategoryPageProps = {
  params: Promise<{
    categoryName: string;
  }>;
};
export type NavLinkProps = {
  href: string;

  children: React.ReactNode;
};

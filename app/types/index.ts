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

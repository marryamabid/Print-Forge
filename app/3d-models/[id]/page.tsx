import { ModelDetailsPage } from "../../types/index";

export default async function ModelDetails({ params }: ModelDetailsPage) {
  const { id } = await params;
  return (
    <div>
      <h1>Model Details for ID: {id}</h1>
    </div>
  );
}

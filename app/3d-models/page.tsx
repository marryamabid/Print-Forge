import ModelCard from "../Components/ModelCard";
import { getAllModels } from "../lib/model";
import { Model } from "../types";
export default async function Models() {
  const models = await getAllModels();
  return (
    <>
      <div className="container px-4 py-6 mx-auto">
        <h1 className="mb-8 text-3xl font-bold">All Models</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {models.map((model: Model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </>
  );
}

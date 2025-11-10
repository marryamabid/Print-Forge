import { Model, ModelGridProps } from "../types";
import ModelCard from "../Components/ModelCard";
export default async function ModelGrid({ title, models }: ModelGridProps) {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold">{title}</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {models.map((model: Model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </>
  );
}

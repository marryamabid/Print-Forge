import modelData from "../data/model.json";
import { GetModelProp, Model } from "../types";

export async function getAllModels() {
  return modelData;
}

export async function getModels({ category }: GetModelProp = {}): Promise<
  Model[]
> {
  let filteredModels = [...modelData];
  if (category) {
    filteredModels = filteredModels.filter(
      (model: Model) => model.category === category
    );
  }
  return filteredModels;
}

export async function getModelById(id: number | string): Promise<Model> {
  const findModel = modelData.find(
    (model: Model) => model.id.toString() === id.toString()
  );
  if (!findModel) {
    throw new Error(`Model not found with id: ${id} `);
  }
  return findModel;
}

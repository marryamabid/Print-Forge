import ModelGrid from "../Components/ModelGrid";
import { getAllModels } from "../lib/model";

export default async function Page() {
  const models = await getAllModels();
  return <ModelGrid title="3D Models" models={models} />;
}

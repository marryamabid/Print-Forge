import ModelGrid from "../Components/ModelGrid";
import { getModels } from "../lib/model";
import { ModelsPropPage } from "../types";
import Form from "next/form";
export default async function Page({ searchParams }: ModelsPropPage) {
  const { q } = searchParams;
  console.log(q);

  const models = await getModels();
  const fiteredModels = q
    ? models.filter(
        (obj) =>
          obj.name.toLowerCase().includes(q.toLowerCase()) ||
          obj.description.toLowerCase().includes(q.toLowerCase())
      )
    : models;
  return (
    <>
      <Form action="/3d-models" className="w-full px-4 md:max-w-xl">
        <input
          name="q"
          placeholder="Search..."
          type="text"
          className="bg-white placeholder:text-gray-500 border 
           text-sm w-full px-5 border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base mb-4"
          defaultValue={q || ""}
          autoComplete="off"
        />
      </Form>
      <ModelGrid title="3D Models" models={fiteredModels} />
    </>
  );
}

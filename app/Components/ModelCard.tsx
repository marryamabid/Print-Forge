import Link from "next/link";
import { ModelCardprops, ModelDetailsPage } from "../types";

import { FaRegHeart } from "react-icons/fa6";
import Image from "next/image";
import Pill from "./Pill";

export default function ModelCard({ model }: ModelCardprops) {
  return (
    <>
      <Link
        href={`/3d-models/${model.id}`}
        className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-"
      >
        <div className="rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden">
          <div className="relative aspect-square">
            <img
              alt=""
              src="/about-image.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between mb-2 ">
              <h2
                id={`model${model.id}-title`}
                className="text-xl font-bold text-gray-800"
              >
                {model.name}
              </h2>
            </div>
            <p className="text-sm text-gray-800">{model.description}</p>
            <div className="mt-2">
              <Pill>{model.category}</Pill>
            </div>
            <div className="flex items-center mt-2 text-gray-400">
              <FaRegHeart
                className="w-5 h-5 mr-1 text-gray-400"
                aria-hidden="true"
              />
              <span>{model.likes}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

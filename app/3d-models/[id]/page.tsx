import { ModelDetailsPage } from "../../types/index";
import { getModelById } from "../../lib/model";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa6";
import Pill from "../../Components/Pill";

export default async function ModelDetails({ params }: ModelDetailsPage) {
  const { id } = await params;
  const model = await getModelById(id);

  return (
    <div className="container px-4 py-6 mx-auto max-w-6xl">
      <article className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <figure className="overflow-hidden relative aspect-square shadow-lg rounded-lg">
          <Image
            src="/about-image.png"
            width={400}
            height={400}
            alt={model?.name || "About Image"}
            className="w-full h-full object-cover"
          />
        </figure>

        <section className="flex flex-col justify-center px-2 py-4 h-full">
          <div className="flex items-center mb-2 text-gray-600 text-2xl">
            <FaRegHeart className="w-5 h-5 mr-2" />
            <span className="font-light">{model.likes} Likes</span>
          </div>
          <h1 className="font-bold text-4xl mb-6">{model.name}</h1>
          <Pill className="mb-6 w-fit" aria-label="Category">
            {model.category}
          </Pill>
          <div className="mb-6">
            <p className="text-gray-600">{model.description}</p>
          </div>
          <footer className="text-sm text-gray-500">
            <time dateTime={model.dateAdded}>
              Added on {new Date(model.dateAdded).toLocaleDateString()}
            </time>
          </footer>
        </section>
      </article>
    </div>
  );
}

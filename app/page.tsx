import Image from "next/image";
import heroImage from "@/public/heroImage.png";
export default function Home() {
  return (
    <main>
      <section className="flex flex-col-reverse items-center justify-between mx-auto gap-10 py-10 px-12 md:flex-row  max-w-7xl">
        <div className="flex-1 space-y-2 ">
          <p className="hidden text-sm text-gray-600 uppercase md:block">
            Your go-to platform for 3D printing files
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">
            Discover what’s possible with 3D printing
          </h1>
          <p className="text-lg text-gray-600 mb-3">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
          <div className="flex gap-10">
            <button
              className="px-6 py-3 bg-white  transition duration-100 hover:bg-black hover:text-white border
              border-black rounded-md "
            >
              Browse models
            </button>
          </div>
        </div>
        <div className="relative w-[350px] h-[350px]">
          <Image
            src={heroImage}
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </section>
    </main>
  );
}

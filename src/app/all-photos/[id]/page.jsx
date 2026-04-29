import {
  Card,
  Chip,
  Button,
  Separator,

} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaDownload,
  FaCalendarAlt,
  FaTag,
  FaArrowLeft,
} from "react-icons/fa";
import {
  MdOutlineHd,
  MdOutlineAutoAwesome,
} from "react-icons/md";


const PhotoDetailsPage = async({params}) => {
    const {id} = await params;
      const res = await fetch('https://pixgen-4wpv.vercel.app/data.json');
      const photos = await res.json();
    const photo = photos.find(p=>p.id == id)
    return (
          <div className="min-h-screen  text-black px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Image Section */}
        <Card className=" border  shadow-2xl">
          <div className="p-4">
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
              <Image
                src={photo.imageUrl}
                alt={photo.title}
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </Card>

        {/* Details Section */}
        <Card className=" border  shadow-2xl">
          <div className="p-8 space-y-6">
            
            {/* Title & Prompt */}
            <div>
              <h1 className="text-4xl font-bold">
                {photo.title}
              </h1>

              <p className="text-zinc-400 mt-4 leading-relaxed">
                {photo.prompt}
              </p>
            </div>

            {/* <Divider className="bg-zinc-700" /> */}
            <Separator className="bg-zinc-700" />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Likes */}
              <div className="bg-zinc-100 rounded-2xl p-4 flex items-center gap-4">
                <FaHeart className="text-pink-500 text-2xl" />

                <div>
                  <p className="text-sm text-zinc-400">
                    Likes
                  </p>

                  <h3 className="text-xl font-semibold">
                    {photo.likes}
                  </h3>
                </div>
              </div>

              {/* Downloads */}
              <div className="bg-zinc-100 rounded-2xl p-4 flex items-center gap-4">
                <FaDownload className="text-cyan-400 text-2xl" />

                <div>
                  <p className="text-sm text-zinc-400">
                    Downloads
                  </p>

                  <h3 className="text-xl font-semibold">
                    {photo.downloads}
                  </h3>
                </div>
              </div>

              {/* Model */}
              <div className="bg-zinc-100 rounded-2xl p-4 flex items-center gap-4">
                <MdOutlineAutoAwesome className="text-yellow-400 text-3xl" />

                <div>
                  <p className="text-sm text-zinc-400">
                    Model
                  </p>

                  <h3 className="text-xl font-semibold">
                    {photo.model}
                  </h3>
                </div>
              </div>

              {/* Resolution */}
              <div className="bg-zinc-100 rounded-2xl p-4 flex items-center gap-4">
                <MdOutlineHd className="text-green-400 text-3xl" />

                <div>
                  <p className="text-sm text-zinc-400">
                    Resolution
                  </p>

                  <h3 className="text-xl font-semibold">
                    {photo.resolution}
                  </h3>
                </div>
              </div>
            </div>

            {/* <Divider className="bg-zinc-700" /> */}
            <Separator className="bg-zinc-700" />

            {/* Extra Info */}
            <div className="space-y-4">

              {/* Category */}
              <div className="flex items-center gap-3">
                <FaTag className="text-orange-400 text-lg" />

                <span className="text-zinc-700">
                  Category:
                </span>

                <Chip
                  color="warning"
                  variant="flat"
                >
                  {photo.category}
                </Chip>
              </div>

              {/* Created Date */}
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-sky-400 text-lg" />

                <span className="text-zinc-700">
                  Created:
                </span>

                <span className="text-black">
                  {new Date(photo.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Tags
              </h2>

              <div className="flex flex-wrap gap-3">
                {photo.tags.map((tag) => (
                  <Chip
                    key={tag}
                    variant="bordered"
                    className="border-zinc-600 text-zinc-700"
                  >
                    #{tag}
                  </Chip>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href={'/all-photos'}>
              
              <Button
                color="primary"
                size="lg"
                className="font-semibold"
              >
               <FaArrowLeft></FaArrowLeft> Go Back
              </Button>
              </Link>

              <Button
                variant="bordered"
                size="lg"
                className="border-zinc-600 text-white"
              >
                Like Image
              </Button>
            </div>

          </div>
        </Card>
      </div>
    </div>
    );
};

export default PhotoDetailsPage;
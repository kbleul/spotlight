import { createViewableImageGrid } from "../../utils/func";

export type galleryImage = {
  type: "landscape" | "portrait";
  image: {
    uuid: string;
    mime_type: string;
    url: string;
  };
};
const ProjectGallery = ({ galleries }: { galleries: galleryImage[] }) => {
  console.log(createViewableImageGrid(galleries));
  return (
    <article className="grid grid-cols-2 gap-y-2 lg:gap-y-5 gap-x-3 lg:gap-x-6 max-w-[1000px] items-stretch">
      {createViewableImageGrid(galleries).map((gallery) => (
        <div
          key={gallery.image.uuid}
          className={`${
            gallery.type === "landscape"
              ? "col-span-2 bg-black max-h-[500px]"
              : "col-span-1 bg-black max-h-[500px]"
          }`}
        >
          <img
            src={gallery.image.url}
            alt={gallery.image.uuid}
            className="w-full h-full"
          />
        </div>
      ))}
    </article>
  );
};

export default ProjectGallery;

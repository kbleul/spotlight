import { useQuery } from "@tanstack/react-query";
import { galleryImage } from "./Projects/ProjectGallery";
import { isEvenArray } from "../utils/func";

export type galleryImageItem = {
  id: string;
  caption: string;
} & galleryImage;

const CultureGallery = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["galleries"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}galleries`).then(
        (res) => res.json()
      ),
  });

  //loading
  if (isPending) return <article className="bg-white h-screen" />;

  if (error) return <></>;

  const galleries: galleryImageItem[] = data.data;
  const isEvenArrayLength = isEvenArray(galleries.length);
  const indexAdder = Math.ceil(galleries.length / 4);

  return (
    <article className="h-[112vh] bg-black flex items-start justify-evenly">
      {galleries.length >= 20 && (
        <>
          <section className="w-[22%] feeds_scroll flex flex-col h-[80vh] lg:h-[107vh] gap-4 overflow-y-hidden hover:overflow-y-scroll">
            {galleries.slice(0, indexAdder).map((image, index) => (
              <img
                className="w-full"
                key={index + image.id}
                src={image.image.url}
                alt=""
                loading="lazy"
              />
            ))}
          </section>
          <section className="w-[22%] feeds_scroll flex flex-col h-[80vh] lg:h-[107vh] gap-4 overflow-y-hidden hover:overflow-y-scroll">
            {galleries.slice(indexAdder, indexAdder * 2).map((image, index) => (
              <img
                className="w-full"
                key={index + image.id}
                src={image.image.url}
                alt=""
              />
            ))}
          </section>
          <section className="w-[22%] feeds_scroll flex flex-col h-[80vh] lg:h-[107vh] gap-4 overflow-y-hidden hover:overflow-y-scroll">
            {galleries
              .slice(indexAdder * 2, indexAdder * 3)
              .reverse()
              .map((image, index) => (
                <img
                  className="w-full"
                  key={index + image.id}
                  src={image.image.url}
                  alt=""
                  loading="lazy"
                />
              ))}
          </section>
          <section className="w-[22%] feeds_scroll flex flex-col h-[80vh] lg:h-[107vh] gap-4 overflow-y-hidden hover:overflow-y-scroll">
            {galleries
              .slice(
                indexAdder * 3,
                isEvenArrayLength ? indexAdder * 4 : indexAdder * 4 + 1
              )
              .reverse()
              .map((image, index) => (
                <img
                  className="w-full"
                  key={index + image.id}
                  src={image.image.url}
                  alt=""
                  loading="lazy"
                />
              ))}
          </section>
        </>
      )}

      {galleries.length < 20 && (
        <>
          <section className="w-[22%] feeds_scroll flex flex-col h-[80vh] lg:h-[107vh] gap-4 overflow-y-hidden hover:overflow-y-scroll">
            {galleries.map((image, index) => (
              <img
                className="w-full"
                key={index + image.id}
                src={image.image.url}
                alt=""
                loading="lazy"
              />
            ))}
          </section>
          <section className="w-[22%] feeds_scroll flex flex-col h-[80vh] lg:h-[107vh] gap-4 overflow-y-hidden hover:overflow-y-scroll">
            {galleries.reverse().map((image, index) => (
              <img
                className="w-full"
                key={index + image.id}
                src={image.image.url}
                alt=""
                loading="lazy"
              />
            ))}
          </section>
          <section className="w-[22%] feeds_scroll flex flex-col h-[80vh] lg:h-[107vh] gap-4 overflow-y-hidden hover:overflow-y-scroll">
            {galleries.map((image, index) => (
              <img
                className="w-full"
                key={index + image.id}
                src={image.image.url}
                alt=""
                loading="lazy"
              />
            ))}
          </section>
          <section className="w-[22%] feeds_scroll flex flex-col h-[80vh] lg:h-[107vh] gap-4 overflow-y-hidden hover:overflow-y-scroll">
            {galleries.reverse().map((image, index) => (
              <img
                className="w-full"
                key={index + image.id}
                src={image.image.url}
                alt=""
                loading="lazy"
              />
            ))}
          </section>
        </>
      )}
    </article>
  );
};

export default CultureGallery;

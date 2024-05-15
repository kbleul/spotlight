import { useQuery } from "@tanstack/react-query";

const CarasoleReverse = ({ title }: { title?: string }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["allclients"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}clients`).then(
        (res) => res.json()
      ),
  });

  //loading
  if (isPending) return <article className="bg-white h-screen" />;

  if (error) return <></>;

  const clientsArr: {
    id: string;
    image: {
      url: string;
    };
  }[] = data.data;

  return (
    <article className="carousel-container bg-black pb-20">
      {title && (
        <h4 className="mt-4 pb-12 font-bold text-2xl text-[#4F4F4F] text-center">
          {title}
        </h4>
      )}
      <section className="carouselReverse">
        <div className="carousel-track gap-x-6 md:gap-x-40">
          {clientsArr.slice(15, clientsArr.length).map((item, index) => (
            <img
              key={item.id + index}
              src={item.image.url}
              alt=""
              loading="lazy"
              className="w-[15%] h-12 md:h-20 md:w-1/4"
            />
          ))}
          {clientsArr.slice(15, clientsArr.length).map((item, index) => (
            <img
              key={item.id + index}
              src={item.image.url}
              loading="lazy"
              alt=""
              className="w-[15%] h-12 md:h-20 md:w-1/4"
            />
          ))}
          {clientsArr.length < 33 &&
            clientsArr
              .slice(15, clientsArr.length)
              .map((item, index) => (
                <img
                  key={item.id + index}
                  src={item.image.url}
                  alt=""
                  loading="lazy"
                  className="w-[15%] h-12 md:h-20 md:w-1/4"
                />
              ))}
          {clientsArr.length < 33 &&
            clientsArr
              .slice(15, clientsArr.length)
              .map((item, index) => (
                <img
                  key={item.id + index}
                  src={item.image.url}
                  alt=""
                  loading="lazy"
                  className="w-[15%] h-12 md:h-20 md:w-1/4"
                />
              ))}
        </div>
      </section>
    </article>
  );
};

export default CarasoleReverse;

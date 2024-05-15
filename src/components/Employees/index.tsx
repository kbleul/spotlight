import { useQuery } from "@tanstack/react-query";
import { Suspense, lazy, useState } from "react";
import { CaraouselStateTypes } from "../../utils/data";

const Caresole = lazy(() => import("./Caresole"));

const getArrayLength = (teamsArr: any[]) => {
  const lengths = {
    firstRow: 0,
    secondRow: 0,
  };

  if ((teamsArr.length / 2) % 2 === 0) {
    lengths.firstRow = teamsArr.length / 2;
    lengths.secondRow = teamsArr.length / 2;
  } else {
    lengths.firstRow = teamsArr.length / 2 + 0.5;
    lengths.secondRow = teamsArr.length / 2 - 0.5;
  }

  return lengths;
};

const Employees = () => {
  const [scrollStatus] = useState(CaraouselStateTypes.Scroll);

  const { isPending, error, data } = useQuery({
    queryKey: ["teams"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}teams`).then((res) =>
        res.json()
      ),
  });

  //loading
  if (isPending) return <article className="bg-white h-screen" />;

  if (error) return <></>;

  const teamsArr: any[] = data.data;

  const arrLengths = getArrayLength(teamsArr);

  return (
    <article className="w-full my-1 overflow-hidden">
      <h2 className="mb-6 md:pt-12 md:pb-16 px-[5%] leading-[3rem]  font-CabinetGrotesk text-[#e0e0e0]  lg:text-[#4F4F4F] text-[42px] text-center  lg:text-[110px] font-extrabold">
        We are Spotlight
      </h2>

      <Suspense fallback={<></>}>
        <Caresole
          teams={teamsArr.slice(0, arrLengths.firstRow)}
          scrollStatus={scrollStatus}
        />
      </Suspense>

      <div className="py-12">
        <Suspense fallback={<></>}>
          <Caresole
            teams={teamsArr.slice(arrLengths.firstRow, teamsArr.length)}
            isReverse
            scrollStatus={scrollStatus}
          />
        </Suspense>
      </div>
    </article>
  );
};

export default Employees;

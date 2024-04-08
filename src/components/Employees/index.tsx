import { useQuery } from "@tanstack/react-query";
import Caresole from "./Caresole";

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
    <article className="w-full">
      <Caresole teams={teamsArr.slice(0, arrLengths.firstRow)} />
      <div className="py-12">
        <Caresole
          teams={teamsArr.slice(arrLengths.firstRow, teamsArr.length)}
          isReverse
        />
      </div>
    </article>
  );
};

export default Employees;

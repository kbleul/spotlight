import Caresole from "./Caresole";

const Employees = () => {
  return (
    <article className="w-full">
      <Caresole />
      <div className="py-12">
        <Caresole isReverse />
      </div>
    </article>
  );
};

export default Employees;

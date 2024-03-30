import approachTrace from "../assets/images/Approach.svg";
import stairImg from "../assets/images/stair.svg";

const Approch = () => {
  return (
    <article className="px-[5%] py-20 bg-white flex flex-col items-start">
      <img src={approachTrace} alt="" className="w-1/2 max-w-[800px]" />

      <section className="flex items-start justify-start pl-6 w-full">
        <div className="w-1/2 flex flex-col gap-8 pt-10 text-[#4F4F4F] font-semibold">
          <p className="max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur. Sem rhoncus diam aliquam
            aliquet nibh enim massa suspendisse tristique. Massa mauris vel
            tincidunt egestas scelerisque viverra sem venenatis mollis. Non
            pharetra magna at amet volutpat ac ut nec enim. Pellentesque viverra
            nulla vitae ullamcorper. Sit.
          </p>
          <p className="max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur. Sem rhoncus diam aliquam
            aliquet nibh enim massa suspendisse tristique. Massa mauris vel
            tincidunt egestas scelerisque viverra sem
          </p>
        </div>
        <img src={stairImg} alt="" className="w-1/2 max-w-[450px]" />
      </section>
    </article>
  );
};

export default Approch;

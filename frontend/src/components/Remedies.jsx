/* eslint-disable react/prop-types */
const Remedies = ({ remedies }) => {
  return (
    remedies.length > 0 && (
      <>
        <h1 className=" font-pop text-xl font-semibold my-5">Remedies</h1>
        <div className=" space-y-2 bg-[#506385] text-[#f9f9e9] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] py-4 px-7 rounded">
          {remedies.map((item, index) => {
            return (
              <li key={index} className=" text-base  font-semibold">
                {item}
              </li>
            );
          })}
        </div>
      </>
    )
  );
};

export default Remedies;

import React from "react";

const CitiesSelector = ({
  status,
  setStatus,
}: {
  status: string;
  setStatus: (data: string) => void;
}) => {
  const cities = [
   'همه شهرها',
    "رامسر",
    "ماسال",
    "کردان",
    "فومن",
    "شیراز",
    "تهران",
    "کیش",
  ];
  return (
    <div className="no-scrollbar mt-4 flex w-screen items-center  justify-start sm:!justify-center overflow-x-scroll text-white">
      {cities.map((city) => (
        <p
        key={crypto.randomUUID()}
          onClick={() => setStatus(city)}
          className={`${status === city ? "bg-customYellow text-black rounded-full" : null} px-2 cursor-pointer ml-5 sm:!text-base text-sm whitespace-nowrap`}
        >
          {city}
        </p>
      ))}
    </div>
  );
};

export default CitiesSelector;

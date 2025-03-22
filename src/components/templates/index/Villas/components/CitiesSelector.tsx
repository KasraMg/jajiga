import React from "react";

const CitiesSelector = ({
  status,
  setStatus,
}: {
  status: string;
  setStatus: (data: string) => void;
}) => {
  const cities = [
    "همه شهرها",
    "رامسر",
    "ماسال",
    "کردان",
    "فومن",
    "شیراز",
    "تهران",
    "کیش",
  ];
  return (
    <div className="no-scrollbar mt-4 flex w-screen items-center justify-start overflow-x-scroll text-white sm:!justify-center">
      {cities.map((city) => (
        <p
          key={crypto.randomUUID()}
          onClick={() => setStatus(city)}
          className={`${status === city ? "rounded-full bg-customYellow text-black" : null} ml-5 cursor-pointer whitespace-nowrap px-2 text-sm sm:!text-base`}
        >
          {city}
        </p>
      ))}
    </div>
  );
};

export default CitiesSelector;

const Card = () => {
  return (
    <section className="flex cursor-pointer items-center justify-center gap-2 sm:!justify-start">
      <img
        className="h-[70px] w-[70px] rounded-lg sm:!h-20 sm:!w-20 lg:!h-36 lg:!w-36"
        src="https://www.jajiga.com/static/img/home/top-locations/ramsar.jpg?v=8"
        alt=""
      />
      <div>
        <p className="font-vazir text-[12px] font-light">اجاره ویلا در</p>
        <span>شیراز</span>
        <p className="font-vazir text-[12px] font-light">1206 ویلا</p>
      </div>
    </section>
  );
};

export default Card;
